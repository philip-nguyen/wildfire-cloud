import React from 'react';
import styled from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function clickMe(){
  alert('You clicked me!');
}

function Map() {
  return (
    <GoogleMap
      defaultZoom = {10}
      defaultCenter ={{ lat: 37.338207, lng: -121.886330}}
      />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Button = styled.button`
  background-color: #e0e0e0;
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #283493;
  }
`

export default function App() {
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
