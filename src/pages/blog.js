import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog.css"
export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
      <div className="main-wrapper">
        <h1>Blog posts</h1>

        {posts.map(post => (
          <article className="blog-title" key={post.id}>
            <h2>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h2>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date
          title
          author
        }
        excerpt(pruneLength: 100)
        id
      }
    }
  }
`
