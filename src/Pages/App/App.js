import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
import HomePage from "../../Pages/HomePage/HomePage";
import LandingPage from "../../Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route
        exact path="/"
        render={() => <LandingPage /> }
        />
        <Route
        exact path="/home"
        render={() => <HomePage/> }
        />
      </Switch>

    </div>
  );
}

export default App;
