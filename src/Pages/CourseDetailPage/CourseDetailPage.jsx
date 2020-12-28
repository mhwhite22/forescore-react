import React from 'react';
import styles from './CourseDetailPage.css';
import Navbar from '../../components/Navbar/Navbar';
import CourseDetailCard from '../../components/CourseDetailCard/CourseDetailCard';


const CourseDetailPage = (props) => {
    const course = props.location.state.course;
    return (
        <div className='CourseDetailPage'>
            <Navbar />
            <CourseDetailCard 
                key={course._id}
                course={course}
                />
            <div className='pageContainer'>
        </div>
        </div>
    )
}

export default CourseDetailPage;