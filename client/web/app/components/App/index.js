import React, { Component } from "react"
import { connect } from 'react-redux'
import Actions from '../../redux/actions'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(Actions.userAuth())
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default connect()(App)
