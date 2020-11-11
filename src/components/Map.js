import React, {Component} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom = {10}
      defaultCenter ={{ lat: 37.338207, lng: -121.886330}}
      />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class MapView extends Component {
  render() {
    return (
      <div style = {{width: '100vw', height: '100vh'}}>
        <WrappedMap
          googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&
            libraries=geometry,draving,places&key=${
              process.env.REACT_APP_GOOGLE_KEY
            }`}
          loadingElement = {<div style = {{ height: "100%"}} />}
          containerElement = {<div style = {{ height: "100%" }} />}
          mapElement = {<div style = {{ height: "100%"}} />}
        />
    </div>
    );
  }
}
