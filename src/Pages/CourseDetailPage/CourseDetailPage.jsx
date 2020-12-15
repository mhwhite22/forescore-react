import React from 'react';
import styles from './CourseDetailPage.css';
import Navbar from '../../Components/Navbar/Navbar';


const CourseDetailPage = (props) => {
    return (
        <div className='CourseDetailPage'>
            <Navbar />
            <div className='pageContainer'>
            Hi I'm the CourseDetail Page
        </div>
        </div>
    )
}

export default CourseDetailPage;