import React from 'react';
import 'materialize-css';
import { Navbar, Icon } from 'react-materialize';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.css';

function mainNavbar(props) {
    return (
        <nav className="main-nav">
        <Link className="logo">ForeScore</Link>
        <br></br>
        <NavLink to='/rounds'>Rounds</NavLink>
        <br></br>
        <NavLink to='/courses'>Courses</NavLink>
        <br></br>
        <NavLink to='/addround'>New Round</NavLink>
        <br></br>
        <NavLink to='/addcourse'>New Course</NavLink>
        <br></br>
        <NavLink to='/home'>Profile</NavLink>
        <br></br>
        <NavLink to='' onClick={props.handleLogout}>Log Out</NavLink>
        </nav>
    )
}

export default mainNavbar;