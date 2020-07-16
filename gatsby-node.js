exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
        `
      {
        articles: allStrapiArticle {
          edges {
            node {
              id
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              id
            }
          }
        }
      }
    `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog articles pages.
    const articles = result.data.articles.edges
    const categories = result.data.categories.edges

    articles.forEach((article, index) => {
        createPage({
            path: `/article/${article.node.id}`,
            component: require.resolve("./src/templates/article.js"),
            context: {
                id: article.node.id,
            },
        })
    })

    categories.forEach((category, index) => {
        createPage({
            path: `/category/${category.node.id}`,
            component: require.resolve("./src/templates/category.js"),
            context: {
                id: category.node.id,
            },
        })
    })
}