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
  const [alignContent, setAlignContent] = useState('center')
  const [flexDirection, setFlexDirection] = useState('row')
  const [flexWrap, setFlexWrap] = useState('nowrap')

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
          values={['center', 'flex-start', 'flex-end', 'stretch', 'baseline']}
        />
        <Controller
          onChange={value => setJustifyContent(value)}
          state={justifyContent}
          title='justify-content'
          id='justifyContent'
          values={[
            'center',
            'flex-start',
            'flex-end',
            'space-between',
            'space-around',
            'space-evenly'
          ]}
        />
        <Controller
          onChange={value => setAlignContent(value)}
          state={alignContent}
          title='align-content'
          id='alignContent'
          values={['center', 'flex-start', 'flex-end', 'stretch', 'space-between', 'space-around']}
        />
        <Controller
          onChange={value => setFlexDirection(value)}
          state={flexDirection}
          title='flex-direction'
          id='flexDirection'
          values={['row', 'column', 'row-reverse', 'column-reverse']}
        />
        <Controller
          onChange={value => setFlexWrap(value)}
          state={flexWrap}
          title='flex-wrap'
          id='flexWrap'
          values={['nowrap', 'wrap', 'wrap-reverse']}
        />
      </Sidebar>
      <Main
        justifyContent={justifyContent}
        alignItems={alignItems}
        alignContent={alignContent}
        flexDirection={flexDirection}
        flexWrap={flexWrap}
      />
    </Layout>
  )
}

export default IndexPage
