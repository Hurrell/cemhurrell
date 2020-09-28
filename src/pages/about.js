import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.css"

import atWork from "../images/hardatwork.jpg"

function About() {
  return (
    <Layout currentPage="About">
      <SEO title="About" />
      <div className="about">
        <img id="at-work" src={atWork} />
        <div className="bio">
          <p>
            Graduating in 2016 with a BEng Hons from Imperial College London, I
            have experience in a wide range of creative and engineering fields,
            including work for Jaguar Land Rover, Atkins W&E, and artists such
            as Groove Armada, Public Service Broadcasting and Post Malone.
          </p>
          <p>
            A mostly self taught programmer, I am currently looking for a full
            time job in web development.
          </p>
          <p>
            I'm excited by the opportunity presented by a new career path, and
            am quickly building a portfolio of self started projects and
            freelance commissions.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
