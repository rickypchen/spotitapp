import React, { Component } from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import ReactDOM from 'react-dom'
import { default as Button } from "../Button"
import Actions from "../../redux/actions"
import { connect } from "react-redux"

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: "",
      popupValue: "You are here!",
      url: "",
      showMap: false
    }
    this.submit = this.submit.bind(this)
    this.previewImage = this.previewImage.bind(this)
    this.logout = this.logout.bind(this)
  }
  previewImage(evt){
    let url = URL.createObjectURL(evt.target.files[0]);
    this.setState({url});
    let output = document.getElementById('preview');
    output.innerHTML = ['<img style="height: 75px; margin: 10px 5px 0 0;" src="', url,
                      '" title="', escape(evt.target.files[0].name), '"/>'].join('');
  }
  logout(){
    this.props.dispatch(Actions.logout())
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
    document.getElementById('cameraInput').addEventListener('change', this.previewImage, false);
  }
  submit(e){
    e.preventDefault()
    let popupValue = document.getElementById("discovery-value").value
    this.setState({popupValue})
    document.getElementById("discovery-value").value = ""
    let preview = document.getElementById('preview');
    this.setState({showMap: true})
    let file = document.getElementById("cameraInput").value = "";
    preview.removeChild(preview.childNodes[0]);
  }
  render() {
    return (
      <div>
        <div className={style.form}>
          <div className={style.inputGroup}>
            <input
              placeholder="What do you spot?"
              className={style.input}
              type="text"
              id="discovery-value" />
          </div>
          <div className={style.inputGroup}>
            <input
              type="file"
              capture="camera"
              accept="image/*"
              id="cameraInput"
              name="cameraInput" />
            <output id="preview"></output>
          </div>
          <Button
            onClick={this.submit}
            style={{ width: "100%" }}
            type="primary">
            SpotIt
          </Button>
        </div>
        <Map
          style={{height: "100vh", zIndex: 1}}
          center={this.state.position}
          zoom={15}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/rickypchen/cixqrjgz300002rn234h1pl6p/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicmlja3lwY2hlbiIsImEiOiJDb053LVV3In0.6qUdY5kyjHAerYaO7CB76A"
            attribution="<attribution>" />
          <Marker
            position={this.state.position}>
            <Popup>
              <span id="current-location">
                {this.state.popupValue}
                <img id="post-image" style={{display: this.state.showMap ? 'block' : 'none' }} className={style.thumb} src={this.state.url}></img>
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default connect()(cssModules(MapView, style))
