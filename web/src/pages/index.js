import React, {useState} from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import Sidebar from '../components/sidebar'
import Controller from '../components/controller'
import Main from '../components/main'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`

function IndexPage (props) {
  const [alignItems, setAlignItems] = useState('center')
  const [justifyContent, setJustifyContent] = useState('center')

  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Sidebar>
        <Controller
          onChange={value => setAlignItems(value)}
          state={alignItems}
          title='align-items'
          id='alignItems'
          values={['center', 'flex-start', 'flex-end']}
        />
        <Controller
          onChange={value => setJustifyContent(value)}
          state={justifyContent}
          title='justify-content'
          id='justifyContent'
          values={['center', 'flex-start', 'flex-end']}
        />
      </Sidebar>
      <Main justifyContent={justifyContent} alignItems={alignItems} />
    </Layout>
  )
}

export default IndexPage
