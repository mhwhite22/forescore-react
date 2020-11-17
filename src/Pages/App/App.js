import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
import HomePage from "../../Pages/HomePage/HomePage";
import LandingPage from "../../Pages/LandingPage/LandingPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      days: [],
      user: userService.getUser(),
      date: this.getCurrentDate(),
    };
  }
  getCurrentDate() {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return today.toLocaleDateString(undefined, options);
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  render() {
    return (
      <div className="App">
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
}

export default App;
