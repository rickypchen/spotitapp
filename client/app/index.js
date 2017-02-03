import React, { Component } from 'react'
import ReactDom from 'react-dom'

class HelloWorld extends Component {
  render(){
    return <div>Hello World!</div>
  }
}

ReactDom.render(
  <HelloWorld />,
  document.getElementById("root")
)
