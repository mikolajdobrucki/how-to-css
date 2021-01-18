// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'hottocss.dev',
        short_name: 'hottocss.dev',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#156dff',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-8WE8DEFE0W'
        ]
      }
    }
  ]
}
