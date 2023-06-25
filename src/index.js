import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFcCom from './components/myFcComp';
import MyClassComponent from './components/MyClassComponent';
import ClassCount from './components/ClassCount';
import CounterComponent from './components/CounterComponent';
import ConRen from './components/ConRen';
import Multimedia from './components/Multimedia';
import ToggleImage from './components/ToggleImage';
import ToggleFace from './components/ToggleFace';
import Parent from './components/Parent';
import MyColors from './components/MyColors';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ComponentOne from './components/ComponentOne';
import CounterIncrement from './components/CounterIncrement';
import HoverIncrement from './components/HoverIncrement';
import RefComp from './components/RefComp';
import User from './User';
import ErrorBoundary from './components/ErrorBoundary';
import UserForm from './UserForm';
import { Nav } from 'react-bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyFcCom /> */}
    {/* <MyClassComponent /> */}
    {/* <MyFcCom name="Aditya" post="Vadapav is love" /> */}
    {/* <MyClassComponent name="Aditya" post="shawarma is love" /> */}
    {/* <ClassCount institute = "YCP" /> */}
    {/* <CounterComponent /> */}
    {/* <ConRen /> */}
    {/* <Multimedia /> */}
    {/* <ToggleImage /> */}
    {/* <ToggleFace /> */}
    {/* <Parent /> */}
    {/* <MyColors /> */}
    {/* <ComponentOne /> */}
    {/* <CounterIncrement /> */}
    {/* <HoverIncrement /> */}
    {/* <RefComp /> */}
    {/* <ErrorBoundary>
    <User name="Aditya" />
    </ErrorBoundary>
    <ErrorBoundary>
    <User name="Vadapav" />
    </ErrorBoundary>
    <ErrorBoundary>
    <User name="Shawarma" />
    </ErrorBoundary> */}
    {/* <UserForm /> */}
    {/* <Nav /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
