// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7V0AQaDcy_BCpcLlCK1s7LeYNyU6yvQ",
  authDomain: "appletsoftech.firebaseapp.com",
  databaseURL: "https://appletsoftech-default-rtdb.firebaseio.com",
  projectId: "appletsoftech",
  storageBucket: "appletsoftech.appspot.com",
  messagingSenderId: "93439925540",
  appId: "1:93439925540:web:3b5ed1b16a77d6d8d4e7b1"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();