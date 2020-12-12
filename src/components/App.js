import React, {Component, useState, useEffect} from 'react'
import styled from 'styled-components'
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
import MapView from "./Map.js"
import Navbar from './Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
import WildfireAnalysis from '../pages/WildfireAnalysis.js';
import WildfireDetection from '../pages/WildfireDetection.js';
import WildfirePrediction from '../pages/WildfirePrediction.js';
import Test from '../pages/Test.js';

import Fire from './Firebase.js'
import Login from '../components/Login.js'
import Hero from './Hero.js'
import AppStyling from './App.css'


const App = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }


const handleLogin = () => {
  clearErrors()
  Fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth-user-not-found":
          setEmailError(err.message)
          break
        case "auth/wrong-password":
          setPasswordError(err.message)
          break

      }
    });
};

const handleSignup = () => {
  clearErrors()
  Fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/Invalid-email":
          setEmailError(err.message)
          break
        case "auth/weak-password":
          setPasswordError(err.message)
          break

      }
    });
};

const handleLogout = () => {
  Fire.auth().signOut()
}

const authListener = () => {
  Fire.auth().onAuthStateChanged(user => {
    if(user) {
      clearInputs()
      setUser(user)
    } else {
      setUser("")
    }
  });
};

useEffect(() => {
  authListener()
}, []);

return (
  <div className = "App">
  {user ? (
    <Hero handleLogout={handleLogout} />
  ) : (
    <Login
      email ={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
    )};
    </div>
  )
}

export default App
