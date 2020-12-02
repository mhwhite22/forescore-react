import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
import HomePage from "../../Pages/HomePage/HomePage";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import CoursesPage from "../../Pages/CoursesPage/CoursesPage";
import RoundsPage from "../../Pages/RoundsPage/RoundsPage";
import RoundFormPage from "../../Pages/RoundFormPage/RoundFormPage";
import CourseFormPage from "../../Pages/CourseFormPage/CourseFormPage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import SignupPage from "../../Pages/SignupPage/SignupPage";
import * as roundsAPI from "../../services/rounds-api";
import * as coursesAPI from "../../services/courses-api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rounds: [],
      courses: [],
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

  handleAddRound = async (newRoundData) => {
    const newRound = await roundsAPI.create(newRoundData);
    this.setState(
      (state) => ({
        rounds: [...state.rounds, newRound],
      }),
      () => this.props.history.push("/home")
    );
  };

  handleAddCourse = async (newCourseData) => {
    const newCourse = await courseAPI.create(newCourseData);
    this.setState(
      (state) => ({
        courses: [...state.courses, newCourse],
      }),
      () => this.props.history.push("/home")
    );
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    const rounds = await roundsAPI.getAll();
    this.setState({rounds});
  }




  render() {
    return (
      <div className="App">
        <Switch>
          <Route
          exact path="/"
          render={() => <LandingPage /> }
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
          exact path="/home"
          render={( {history }) =>
            userService.getUser() ? (
              <HomePage
                history={history}
                currentDate={this.getCurrentDate}
                handleLogout={this.handleLogout}
              />
             ) : (
               <Redirect to="/" />
             ) }
          />
          <Route
          exact path="/courses"
          render={( {history} ) => 
          userService.getUser() ? (
          <CoursesPage />
          ) : (
            <Redirect to="/" />
          )
          }
          />
          <Route
          exact path="/rounds"
          render={( {history} ) =>
          userService.getUser() ? (
           <RoundsPage rounds={this.state.rounds} />
          ) : (
            <Redirect to="/" />
          )
          }
          />
          <Route
          exact path="/addround"
          render={() => <RoundFormPage />}
          />
          <Route
          exact path="/addcourse"
          render={( { history }) => 
            userService.getUser() ? (
            <CourseFormPage handleAddRound={this.handleAddRound} />
            ) : (
              <Redirect to="/" />
            )
            }
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
