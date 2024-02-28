import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        <StaticImage src="../images/samridh.png" />
        <br />
        <br />
        Hello there! I'm Samridh a student from Kathmandu who loves to play
        games and hangout with friends
      </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
