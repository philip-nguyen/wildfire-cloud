import React from 'react'

import Navbar from './Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
import WildfireAnalysis from '../pages/WildfireAnalysis.js';
import WildfireDetection from '../pages/WildfireDetection.js';
import WildfirePrediction from '../pages/WildfirePrediction.js';
import Test from '../pages/Test.js';

const Hero = ({handleLogout}) => {
  return (
    <section className="hero">
    <Router>
    <Navbar handleLogout={handleLogout}/>
    <Switch>
        <Route path= '/WildfireAnalysis' exact component = {WildfireAnalysis}/>
        <Route path= '/WildfireDetection' exact component = {WildfireDetection}/>
        <Route path= '/WildfirePrediction' exact component = {WildfirePrediction}/>
    </Switch>
  </Router>
  </section>

  )
}

export default Hero
