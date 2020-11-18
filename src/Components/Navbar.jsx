import React from 'react';
import 'materialize-css';
import { Navbar, Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

function mainNavbar(props) {
    return (
        <nav className="main-nav"
        >
        <h1>ForeScore</h1>
        <NavLink to='/home'>Rounds</NavLink>
        <br></br>
        <NavLink to='/home'>Courses</NavLink>
        <br></br>
        <NavLink to='/home'>New Round</NavLink>
        <br></br>
        <NavLink to='/home'>New Course</NavLink>
        <br></br>
        <NavLink to='/home'>Profile</NavLink> 
        </nav>
    )
}

export default mainNavbar;