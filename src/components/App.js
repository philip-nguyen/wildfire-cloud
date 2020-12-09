import React, {Component} from 'react'
import styled from 'styled-components'
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
import MapView from "./Map.js"
import Navbar from './Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
import WildfireAnalysis from '../pages/WildfireAnalysis.js';
import WildfireDetection from '../pages/WildfireDetection.js';
import WildfirePrediction from '../pages/WildfirePrediction.js';
import Login from '../pages/LoginForm.js';



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

      <Router>
        <Navbar/>
        <Switch>
            <Route path= '/' exact component = {Home}/>
            <Route path= '/WildfireAnalysis' exact component = {WildfireAnalysis}/>
            <Route path= '/WildfireDetection' exact component = {WildfireDetection}/>
            <Route path= '/WildfirePrediction' exact component = {WildfirePrediction}/>
        </Switch>
      </Router>


    );
  }
