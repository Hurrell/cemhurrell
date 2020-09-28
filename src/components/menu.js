import React from "react"
import { Link } from "gatsby"

import "./menu.css"

const Menu = ({ currentPage }) => {
  //   let currentPageStyle = ""
  console.log(currentPage)
  return (
    <nav>
      {/* {props.location.pathname} */}
      <ul>
        <li>
          <Link
            to="/"
            className={currentPage === "Projects" ? "current-page" : null}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={currentPage === "About" ? "current-page" : null}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/cv"
            className={currentPage === "CV" ? "current-page" : null}
          >
            CV
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
