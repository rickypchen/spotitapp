import React, { Component } from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { Map, TileLayer } from 'react-leaflet'
import ReactDOM from 'react-dom'

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: [51.0, -0.09]
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const position = [pos.coords.latitude, pos.coords.longitude]
        this.setState({position});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }
  render() {
    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={this.state.position}
          zoom={10}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/rickypchen/cixqrjgz300002rn234h1pl6p/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicmlja3lwY2hlbiIsImEiOiJDb053LVV3In0.6qUdY5kyjHAerYaO7CB76A"
            attribution="<attribution>" />
        </Map>
      </div>
    )
  }
}
export default cssModules(MapView, style)
