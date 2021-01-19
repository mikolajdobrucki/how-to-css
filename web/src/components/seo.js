import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import ogimage from '../images/og-image.png'



function SEO ({description, lang, meta, keywords, title}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.site && data.site.description) || ''
        const siteTitle = (data.site && data.site.title) || ''
        return (
          <Helmet
            htmlAttributes={{lang}}
            title={`${title} – flexbox cheatsheet & playground`}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image'
              },
              {
                name: 'twitter:creator',
                content: '@mikolajdobrucki'
              },
              {
                name: 'twitter:image',
                content: `https://www.howtocss.dev${ogimage}`
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              },
              {
                name: 'og:url',
                content: `https:/www.howtocss.dev/`
              },
              {
                name: 'og:image',
                content: `https://www.howtocss.dev${ogimage}`
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`
