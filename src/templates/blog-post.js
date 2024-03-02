import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog-post.css"
const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <div>
        <small className="date">{post.frontmatter.date}</small>
        <div
          className="blog-excerpt-wrapper"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      excerpt(pruneLength: 10000000)
    }
  }
`
