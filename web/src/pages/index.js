import React, { Component } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alignItems: "center",
    };
  }

  render() {
    const { data, errors } = this.props;

    if (errors) {
      return (
        <Layout>
          <GraphQLErrorList errors={errors} />
        </Layout>
      );
    }

    const site = (data || {}).site;
    // const projectNodes = (data || {}).projects
    //   ? mapEdgesToNodes(data.projects)
    //       .filter(filterOutDocsWithoutSlugs)
    //       .filter(filterOutDocsPublishedInTheFuture)
    //   : [];

    if (!site) {
      throw new Error(
        'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
      );
    }

    return (
      <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        {/* <Container>
          <h1 hidden>Welcome to {site.title}</h1>
          {projectNodes && (
            <ProjectPreviewGrid
              title='Latest projects'
              nodes={projectNodes}
              browseMoreHref='/archive/'
            />
          )}
        </Container> */}
        <Sidebar>
          <h2></h2>
          <div className="input">
            <label>
              <input
                type="radio"
                name="alignItemsCenter"
                id="alignItemsCenter"
                checked={this.state.alignItems === "center"}
                onChange={(e) => {
                  this.setState({ alignItems: "center" });
                }}
              />
              alignItemsCenter
            </label>
          </div>
          <div className="input">
            <label>
              <input
                type="radio"
                name="alignItemsTop"
                id="alignItemsTop"
                checked={this.state.alignItems === "flex-start"}
                onChange={(e) => {
                  this.setState({ alignItems: "flex-start" });
                }}
              />
              alignItemsTop
            </label>
          </div>
          <div className="input">
            <label>
              <input
                type="radio"
                name="alignItemsBottom"
                id="alignItemsBottom"
                checked={this.state.alignItems === "flex-end"}
                onChange={(e) => {
                  this.setState({ alignItems: "flex-end" });
                }}
              />
              alignItemsBottom
            </label>
          </div>
          alignitems: {this.state.alignItems}
        </Sidebar>
        <Main state={this.state} />
      </Layout>
    );
  }
}

export default IndexPage;
