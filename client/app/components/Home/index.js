import React, { Component } from 'react'
import { default as Sidebar } from "../Sidebar"
import { default as style } from "./style.css"

export class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className={style.chatWrapper}>
          Home component
        </div>
      </div>
    )
  }
}

export default Home
