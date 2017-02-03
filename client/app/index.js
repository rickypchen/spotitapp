import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import "./styles/reset.css"
import { default as Home } from "./components/Home"
import { default as Settings } from "./components/Settings"

const App = props => (<div>{props.children}</div>)

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>,
  document.getElementById("root")
)
