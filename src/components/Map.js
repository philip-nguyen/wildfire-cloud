import React, {Component} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";

function Map() {
  return (
    <div>
    <GoogleMap
      defaultZoom = {10}
      defaultCenter ={{ lat: 37.338207, lng: -121.886330}}
      />
    <Marker 
        position ={{ lat: 37.338207, lng: -121.886330}}
      />  
      </div>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class MapView extends Component {
  render() {
    return (
      <div style = {{width: '43vw', height: '50vh'}}>
        <WrappedMap
          googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&
            libraries=geometry,draving,places&key=${
              process.env.REACT_APP_GOOGLE_KEY
            }`}
          loadingElement = {<div style = {{ height: "100%"}} />}
          containerElement = {<div style = {{ height: "100%" }} />}
          mapElement = {<div style = {{ height: "100%", zIndex: "0"}} />}
        />
    </div>
    );
  }
}
