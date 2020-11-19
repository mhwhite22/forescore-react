import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import userservice from "../../utils/userservice";
import HomePage from "../../Pages/HomePage/HomePage";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import CoursesPage from "../../Pages/CoursesPage/CoursesPage";
import RoundsPage from "../../Pages/RoundsPage/RoundsPage";
import RoundFormPage from "../../Pages/RoundFormPage/RoundFormPage";
import CourseFormPage from "../../Pages/CourseFormPage/CourseFormPage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rounds: [],
      courses: [],
      user: userservice.getUser(),
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
    userservice.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userservice.getUser() });
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
          <Route
          exact path="/courses"
          render={() => <CoursesPage />}
          />
          <Route
          exact path="/rounds"
          render={() => <RoundsPage />}
          />
          <Route
          exact path="/addround"
          render={() => <RoundFormPage />}
          />
          <Route
          exact path="/addcourse"
          render={() => <CourseFormPage />}
          />
          <Route
          exact path="/profile"
          render={() => <ProfilePage />}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
