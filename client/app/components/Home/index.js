import React, { Component } from 'react'
import cssModules from "react-css-modules"
import { default as style } from "./style.css"

import { default as Signup } from "../Signup"
import { default as Login } from "../Login"

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formState: "login"
    }
  }

  render() {
    return (
      <div className={style.leader}>
        <h1 className={style.title}>Spotit App</h1>
        {this.state.formState === "signup" ? <Signup /> : null}
        {this.state.formState === "login" ? <Login /> : null}
        <img
          role="presentation"
          className={style.circles}
          src="https://s3.amazonaws.com/learnphoenix-static-assets/images/circles-full.png" />
      </div>
    )
  }
}

export default cssModules(Home, style)
