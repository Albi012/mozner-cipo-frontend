import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

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

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 export default firebaseApp;