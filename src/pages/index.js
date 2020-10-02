import React from "react"
// import { Link } from "gatsby"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from "../components/image"

const IndexPage = () => {
  return (
    <Layout currentPage="Projects">
      <SEO title="Home" />
      <div className="project">
        <div className="project-images">
          <div className="project-image">
            <Image filename="Patchpal_screenshot_1.png" />
          </div>
          <div className="project-image">
            <Image filename="Patchpal_screenshot_2.png" />
          </div>
          <div className="project-image">
            <Image filename="Patchpal_screenshot_3.png" />
          </div>
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
