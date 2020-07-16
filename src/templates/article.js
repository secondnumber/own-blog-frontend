import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query {
    strapiArticle {
      id
      title
      content
      updated_at
      singleImage {
         publicURL
        }
    }
  }
`

const Article = ({ data }) => {
    const article = data.strapiArticle
    console.log(article)
    return (
        <Layout>
            <div>
                <div
                    id="banner"
                    className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                    data-src={article.singleImage.publicURL}
                    data-srcset={article.singleImage.publicURL}
                    data-uk-img
                >
                    <h1>{article.title}</h1>
                </div>

                <div className="uk-section">
                    <div className="uk-container uk-container-small">
                        <ReactMarkdown source={article.content} />
                        <p>
                            <Moment format="MMM Do YYYY">{article.updated_at}</Moment>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Article