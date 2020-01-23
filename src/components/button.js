import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

const Button = ({ children }) => (
  <button  href="https://docs.google.com/document/d/12FRzcYSa63ucdcDiwekaBzFuubOcAUAeJNaKAZHKD54/edit#heading=h.q05381crtadw"
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      
    }}
      >
    {children}
  </button>
)

export default Button
