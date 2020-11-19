import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./LandingPage.css";

const LandingPage = (props) => {
    return (
        <div className="LandingPage">
        <h1>Welcome to ForeScore</h1>
        <Link to ='/home'>Home</Link>
        </div>
    )
}

export default LandingPage;