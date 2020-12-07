import React from 'react';
import 'materialize-css';
import { Navbar, Icon } from 'react-materialize';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.css';

function mainNavbar(props) {
    return (
        <nav className="main-nav nav-wrapper blue-grey darken-2">
        <ul>
        <Link className="logo" to='/home'>ForeScore</Link>
        <Link className="navlink active" to='/rounds'>Rounds</Link>

       <Link className="navlink active" to='/courses'>Courses</Link>

        <Link className="navlink active" to='/addround'>New Round</Link>

         <Link className="navlink active" to='/addcourse'>New Course</Link>

        <Link className="navlink active" to='/home'>Profile</Link>

        <Link className="navlink active" to='' onClick={props.handleLogout}>Log Out</Link>
        </ul>
        </nav>
    )
}

export default mainNavbar;