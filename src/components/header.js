import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"

import throttle from "lodash/throttle"

import "./header.css"

const Header = ({ siteTitle }) => {
  useEffect(() => {
    document.addEventListener("scroll", throttle(scrollFunction, 100))
  })

  function scrollFunction() {
    if (
      // We aren't at the top of webpage
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("header-container").classList.add("minimised")
    } else {
      // We're at the top.
      document.getElementById("header-container").classList.remove("minimised")
    }
  }

  return (
    <header>
      <div className="header-container" id="header-container">
        <div id="header">
          <div className="card">
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                // style={{
                //   color: `black`,
                //   textDecoration: `none`,
                // }}
              >
                {siteTitle}
              </Link>
            </h1>
            <div>
              <h2>Software Engineer | Full Stack Web Dev</h2>
              {/* <h3>I design and build pretty, practical things.</h3> */}
            </div>
          </div>
          {/* <div className="contact">
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
          </div> */}
        </div>
      </div>

      <div className="spacer"></div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
