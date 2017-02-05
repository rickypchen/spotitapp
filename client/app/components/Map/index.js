import React, { Component } from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

class Map extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        Map component
      </div>
    )
  }
}
export default cssModules(Map, style)
