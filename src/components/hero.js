import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import logo from "../images/logo.png"


const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
      }}
    />
    
    <img
          src={logo}
        />
            <h1 style={{ textAlign: "center" }}>Sourcing hackers</h1>

    <Button >Apply</Button>
    {/* <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div> */}
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
