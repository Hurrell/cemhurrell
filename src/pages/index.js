import React from "react"
import { Link } from "gatsby"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PP1 from "../images/Patchpal_screenshot_1.png"
import PP2 from "../images/Patchpal_screenshot_2.png"
import PP3 from "../images/Patchpal_screenshot_3.png"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Image from "../components/image"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query indexImages {
  //     image: file(relativePath: { eq: "Patchpal_screenshot_1.png" }) {
  //       id
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout currentPage="Projects">
      <SEO title="Home" />
      {/* <h1>Hi cem</h1>
    <p style={{ fontSize: "30px" }}>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      <div className="project">
        <div className="project-images">
          {/* <Img
            className="project-image"
            fluid={data.image.childImageSharp.fluid}
          /> */}
          <div className="project-image">
            <Image filename="Patchpal_screenshot_1.png" />
          </div>
          <div className="project-image">
            <Image filename="Patchpal_screenshot_2.png" />
          </div>
          <div className="project-image">
            <Image filename="Patchpal_screenshot_3.png" />
          </div>

          {/* <img className="project-image" src={PP1} alt="" /> */}
          {/* <img className="project-image" src={PP2} alt="" />
          <img className="project-image" src={PP3} alt="" /> */}
        </div>
        <div className="project-details">
          <h3>PatchPal</h3>
          <p>
            <i>Design, Specification and build.</i>
          </p>
          <p className="project-description">
            A mobile-first web app that allows easy navigation around a database
            of event lighting equipment. Users can look up key facts, and add
            the lights to a list to quickly find their total weight and power
            draw.
          </p>
          <div className="project-details-footer">
            <p>React | JS | HTML | CSS</p>
            <p>
              <a href="https://www.patchpalapp.com">www.patchpalapp.com</a>
              <span> | </span>
              <a href="https://www.github.com/Hurrell/patchpalapp">Github</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
