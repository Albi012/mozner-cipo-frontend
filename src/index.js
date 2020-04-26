import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCpbi9HxZ_IHDwvPfcUbFbJwawG91nKqUs",
    authDomain: "mozner-cipo.firebaseapp.com",
    databaseURL: "https://mozner-cipo.firebaseio.com",
    projectId: "mozner-cipo",
    storageBucket: "mozner-cipo.appspot.com",
    messagingSenderId: "377366200658",
    appId: "1:377366200658:web:2f945c549cd9cf8e3bba8b",
    measurementId: "G-ZL2BLSLHDJ"
  };

  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App/>,document.querySelector("#root"))