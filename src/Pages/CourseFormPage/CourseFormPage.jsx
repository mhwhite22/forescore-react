import React from 'react';
import styles from './CourseFormPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import CourseForm from '../../Components/CourseForm/CourseForm';

function CourseFormPage(props) {
    return(
        <div className="CourseFormPage">
            <Navbar />
            <CourseForm />
        </div>
    )
}

export default CourseFormPage;