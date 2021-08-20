import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyCYw1rEgrmwevxdBIhoqw8XzVEif8N001g",
  authDomain: "hostel-allocation-app-1f674.firebaseapp.com",
  projectId: "hostel-allocation-app-1f674",
  storageBucket: "hostel-allocation-app-1f674.appspot.com",
  messagingSenderId: "262868803154",
  appId: "1:262868803154:web:62b9df95dd660ddad4898b",
  measurementId: "G-XPPQQMQQ3B"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
