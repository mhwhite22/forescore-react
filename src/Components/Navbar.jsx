import React from 'react';
import 'materialize-css';
import { Sidenav, Navbar, Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

function mainNavbar(props) {
    return (
        <Navbar 
            alignLinks="right"
            brand={<a className="logo" href="/">Logo</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            sidenav={<li>Custom node!</li>}
        >
            <h1>HI I"M HERE</h1>
        <NavLink to='/home'>Rounds</NavLink>
        <NavLink to='/home'>Courses</NavLink>
        <NavLink to='/home'>New Round</NavLink>
        <NavLink to='/home'>New Course</NavLink>
        <NavLink to='/home'>Profile</NavLink> 
        </Navbar>
    )
}

export default mainNavbar;