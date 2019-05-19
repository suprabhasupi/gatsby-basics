/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
 const path = require("path");
 const fs = require("fs")

//  createpage is read the data which we are passing
exports.createPages = async({actions}) => {
  const { createPage} = actions

  const data = JSON.parse(
    fs.readFileSync("src/data/programs.json")
  )

  const blogPostTemplate = path.resolve(`src/templates/template.js`)

  data.pages.forEach((item) => {
    console.log("item->", item);
    // create pag api where we are passing the api
    createPage({
      path: item.slug,
      component: blogPostTemplate,
      context: item // additional data canbe pased via contxt
    })
  })
}