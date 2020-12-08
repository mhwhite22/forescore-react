import React from 'react';
import styles from './CoursesPage.css'
import Navbar from '../../Components/Navbar/Navbar';
import CourseListItem from '../../Components/CourseListItem/CourseListItem';

const CoursesPage = (props) => {
    return (
        <div className='CoursesPage'>
            <Navbar />
            <div className='pageContainer'>
            <h4>My Courses </h4>
                {props.courses.map(course =>
                    <CourseListItem
                    course={course}
                    key={course._id}
                    />
                )}
        </div>
        </div>
    )
}

export default CoursesPage;