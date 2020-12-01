import React from 'react';
import 'materialize-css';
import { Navbar, Icon } from 'react-materialize';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.css';

function mainNavbar(props) {
    return (
        <nav className="main-nav">
        <Link className="logo" to='/home'>ForeScore</Link>
        <br></br>
        <Link className="navlink" to='/rounds'>Rounds</Link>
        <br></br>
        <Link className="navlink" to='/courses'>Courses</Link>
        <br></br>
        <Link className="navlink" to='/addround'>New Round</Link>
        <br></br>
        <Link className="navlink" to='/addcourse'>New Course</Link>
        <br></br>
        <Link className="navlink" to='/home'>Profile</Link>
        <br></br>
        <Link className="navlink" to='' onClick={props.handleLogout}>Log Out</Link>
        </nav>
    )
}

export default mainNavbar;