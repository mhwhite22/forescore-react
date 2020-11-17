import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

function Navbar(props) {
    return (
        <>
        <nav className='main-nav sidenav'>
        <Link to='/'>Rounds</Link>
        <Link to='/'>Courses</Link>
        <Link to='/'>New Round</Link>
        <Link to='/'>New Course</Link>
        <Link to='/'>Profile</Link> 
        </nav>
        </>
    )
}

export default Navbar;