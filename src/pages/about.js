import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.css"

import LargeImage from "../components/largeImage"

function About() {
  return (
    <Layout currentPage="About">
      <SEO title="About" />
      <div className="about">
        <div id="at-work">
          <LargeImage filename="hardatwork.jpg" />
        </div>
        <div className="bio">
          <div className="contact">
            <ul>
              <li>
                <a id="github" href="https://github.com/Hurrell">
                  <span className="desktop">github.com/Hurrell</span>
                  <span className="mobile">Github</span>
                </a>
              </li>
              <li>
                <a id="linkedin" href="https://linkedin.com/in/cemhurrell">
                  <span className="desktop">linkedin.com/in/cemhurrell</span>
                  <span className="mobile">LinkedIn</span>
                </a>
              </li>
              <li>
                <a id="email" href="mailto:cem.hurrell@gmail.com">
                  <span className="desktop">cem.hurrell@gmail.com</span>
                  <span className="mobile">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
