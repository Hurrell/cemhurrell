import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => {
  let copyToClipboard = e => {
    // e.target.select()
    // this.textArea.select()

    console.log(e)
    console.log(e.target.innerText)

    var copyTextarea = document.querySelector("#email")
    copyTextarea.focus()
    copyTextarea.select()

    document.execCommand("copy")
    // // This is just personal preference.
    // // I prefer to not show the whole text area selected.
    // e.target.focus()
    window.getSelection().removeAllRanges()
    // this.setState({ copySuccess: "Copied!" })
  }

  return (
    <header
      style={{
        background: `white`,
        marginBottom: `1.45rem`,
      }}
    >
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
          <h2>Full Stack Junior Web Developer</h2>
          <h3>I design and build pretty, practical things.</h3>
        </div>
      </div>
      <div className="contact">
        <ul>
          <li>
            <a href="https://github.com/Hurrell">
              <span className="desktop">github.com/Hurrell</span>
              <span className="mobile">Github</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/cemhurrell">
              <span className="desktop">linkedin.com/in/cemhurrell</span>
              <span className="mobile">LinkedIn</span>
            </a>
          </li>
          <li>
            <span className="desktop">
              <textarea
                id="email"
                onClick={copyToClipboard}
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
              >
                cem.hurrell@gmail.com
              </textarea>
            </span>
            <span className="mobile">
              <a href="mailto:cem.hurrell@gmail.com">Email</a>
            </span>
          </li>
        </ul>
      </div>
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
