import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from "../components/image"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "hardatwork.jpg" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("data:", data)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <div style={{ width: "100%" }}>
        <Img fixed={data.image.childImageSharp.fixed} />
        <Img fluid={data.image.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default NotFoundPage
