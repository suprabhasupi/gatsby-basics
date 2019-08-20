import React from 'react'
import Helmet from 'react-helmet'

export default function Template(props) {
  const { markdownReamrk: post} = data
  // const post = data.markdownReamrk;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div>dangerouslySetInnerHTML ={{__html: post.html}}</div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownReamrk(frontmatter: path {eq: $path}) {
      html {
        frontmatter {
          path
          title
        }
      }
    }
  }
`