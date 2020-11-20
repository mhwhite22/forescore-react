import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./LandingPage.css";

const LandingPage = (props) => {
    return (
        <div className="LandingPage">
        <h1>Welcome to ForeScore</h1>
        <Link to ='/login'>Login</Link>
        <Link to='/signup'>Sign Up Here</Link>
        </div>
    )
}

export default LandingPage;