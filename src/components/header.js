import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import debounce from "lodash/debounce"
import throttle from "lodash/throttle"

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

  // https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp
  // When the user scrolls down 50px from the top of the document, resize the header's font size
  // window.onscroll = function () {
  //   console.log("scrollin")
  //   debounce(() => {
  //     console.log("smol")
  //   }, 500)()
  // }

  // window.onscroll = debounce(() => {
  //   scrollFunction()
  // }, 10)

  window.onscroll = throttle(scrollFunction, 100)

  function scrollFunction() {
    // console.log("scrolled")
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      // document.getElementById("header").style.fontSize = "30px"
      console.log("smol")
      document.getElementById("header-container").classList.add("minimised")
    } else {
      console.log("notsmol")
      // document.getElementById("header").style.fontSize = "90px"
      document.getElementById("header-container").classList.remove("minimised")
    }
  }

  return (
    <header
      // id="header"
      style={{
        background: `white`,
        marginBottom: `1.45rem`,
      }}
    >
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
              <h2>Full Stack Junior Web Developer</h2>
              <h3>I design and build pretty, practical things.</h3>
            </div>
          </div>
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
                <span className="desktop">
                  <a href="mailto:cem.hurrell@gmail.com">
                    cem.hurrell@gmail.com
                  </a>

                  {/* <textarea
                    id="email"
                    onClick={copyToClipboard}
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                  >
                    cem.hurrell@gmail.com
                  </textarea> */}
                </span>
                <span className="mobile">
                  <a href="mailto:cem.hurrell@gmail.com">Email</a>
                </span>
              </li>
            </ul>
          </div>
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
