import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import Appwrapper from './components/appwrapper/appwrapper';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY ,
    authDomain: process.env.REACT_APP_AUTHDOMAIN ,
    projectId: process.env.REACT_APP_PROJECTID ,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
    appId: process.env.REACT_APP_APPID ,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Appwrapper />
    </FirebaseAppProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
