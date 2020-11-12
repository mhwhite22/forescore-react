import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    return (
        <div className="LandingPage">
        <h2>Welcome to ForeScore</h2>
        <Link to ='/home'>Home</Link>
        </div>
    )
}

export default LandingPage;