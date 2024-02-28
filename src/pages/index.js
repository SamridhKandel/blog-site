import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage src="../images/samridh.png" alt="blurred" width={100} />
      <p>
        Hi, I'm Samridh. A student living my bachelor life in Kathmandu. I like
        games and hanging out with my friends and shi
      </p>
      <footer>created by {data.site.siteMetadata.author}</footer>
    </Layout>
  )
}

export const Head = ({ data }) => {
  return <title>{data.site.siteMetadata.title}</title>
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
    }
    image: file(base: { eq: "samridh.png" }) {
      publicURL
    }
  }
`

export default IndexPage
