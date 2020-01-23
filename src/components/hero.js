import React from "react"
import PropTypes, { nominalTypeHack } from "prop-types"

// import Button from "../components/button"
// import headerImage from "../images/header.png"
// import MockupContent from "./image"
// import mockupFrame from "../images/mockup-frame.png"
import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"
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
    
    <img alt="logo"
          src={logo}
        />
            <h1 style={{ textAlign: "center" }}>Sourcing hackers</h1>
            
            <a   
            style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
    }}
    href="https://docs.google.com/document/d/12FRzcYSa63ucdcDiwekaBzFuubOcAUAeJNaKAZHKD54">Apply</a>
    {/* <Button>Apply</Button> */}
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
