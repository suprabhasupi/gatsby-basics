import { graphql } from "graphql-compose";

const blogPostTemplate = path.resolve("src/templates/template-graphql.js");

return graphql (`
  {
    allMarkDownRemark {
      edges {
        node {
          html 
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`).then(result => {
  if (result.errors) {
    console.log("error-->>>", result.errors)
    throw result.errors
  }
  
})

data.pages.forEach((item) => {
  console.log("item->", item);
  // create pag api where we are passing the api
  createPage({
    path: item.slug,
    component: blogPostTemplate,
    context: item // additional data canbe pased via contxt
  })
})
