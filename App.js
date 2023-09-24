import React from "react";
import "./App.css";
import {Redirect, Switch , Route} from 'react';
import Login from './login';
import Header from './header';
import OtpValidation from './otpValidation';
import Home from './home';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path = {'/home'} component = {Home}/>
      <Route path = {'/otpValidation'} component = {OtpValidation}/>
      <Route path = {'/'} component = {Login}/>
      <Redirect to = '/'/>
      </Switch>
     </div>
  );
}
