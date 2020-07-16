import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

const IndexPage = () => {
    return (
        <Layout>
            <StaticQuery
                query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                id
                title
                updated_at
                category {
                  name
                }
                image {
                  url
                }
              }
            }
          }
        }
      `}
                render={data => (
                    <div className="uk-section">
                        <div className="uk-container uk-container-large">
                            <h1>Strapi blog</h1>
                            <ArticlesComponent articles={data.allStrapiArticle.edges} />
                        </div>
                    </div>
                )}
            />
        </Layout>
    )
}


export default IndexPage