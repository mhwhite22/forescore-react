import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    return (
        <div className="HomePage">
        <h2>Hello, User</h2>
        <Link to ='/'>Somewhere</Link>
        </div>
    )
}

export default HomePage;