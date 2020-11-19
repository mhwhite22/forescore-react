import React from 'react';
import styles from './CourseFormPage.css';
import Navbar from '../../Components/Navbar/Navbar';

function CourseFormPage(props) {
    return(
        <div className="CourseFormPage">
            <Navbar />
            <h3>A Form To Add A New Course Goes Here</h3>
        </div>
    )
}

export default CourseFormPage;