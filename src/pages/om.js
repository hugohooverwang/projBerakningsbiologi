import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
export default ({ data }) => (
  <Layout>
    <p>this is a test.</p>
    <Img fixed={data.file.childImageSharp.fixed} />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/natasha-spencer-_hH0dC6A-FM-unsplash.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
