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
            <Image filename="patchpal_screenshot_1_transp.png" />
          </div>
          <div className="project-image">
            <Image filename="patchpal_screenshot_2_transp.png" />
          </div>
          <div className="project-image">
            <Image filename="patchpal_screenshot_3_transp.png" />
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
      <div className="project">
        <div className="project-images">
          <div className="project-image">
            <Image filename="moniesDue_form_transp.png" />
          </div>
          <div className="project-image">
            <Image filename="moniesDue_requestJson_transp.png" />
          </div>
          <div className="project-image">
            <Image filename="moniesDue_returnedJson_transp.png" />
          </div>
        </div>
        <div className="project-details">
          <h3>Monies Due</h3>
          <p>
            <i>Specification and build.</i>
          </p>
          <p className="project-description">
            A simple API that calculates and returns a tax estimate for UK
            freelancers based on submitted income information. There's a simple
            front end form for testing, and the Github Readme contains the
            necessary instructions for use and details all the available
            options.
          </p>
          <div className="project-details-footer">
            <p>Express | Node.js | Heroku</p>
            <p>
              <a href="https://moniesdue.herokuapp.com/">
                moniesdue.herokuapp.com
              </a>
              <span> | </span>
              <a href="https://github.com/Hurrell/taxAPI">Github</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
