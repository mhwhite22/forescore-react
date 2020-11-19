import React from 'react';
import styles from './CoursesPage.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";

const CoursesPage = (props) => {
    return (
        <div className="CoursesPage">
        <Navbar />
        <h1>My Courses</h1>
        <h5>I'm going to show an index of all your courses</h5>
        </div>
    )
}

export default CoursesPage;