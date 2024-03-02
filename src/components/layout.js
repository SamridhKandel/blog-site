import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link className="visited-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="visited-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="visited-link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <a
              className="visited-link"
              href="https://github.com/SamridhKandel"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
      <main className="main-wrapper">
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
