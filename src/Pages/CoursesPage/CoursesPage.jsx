import React from 'react';
import styles from './CoursesPage.css'
import Navbar from '../../Components/Navbar/Navbar';
import CourseListItem from '../../Components/CourseListItem/CourseListItem';

const CoursesPage = (props) => {
    return (
        <div className='CoursesPage'>
            <Navbar />
            <h2>My Courses </h2>
                {props.courses.map(course =>
                    <CourseListItem
                    course={course}
                    key={course._id}
                    />
                )}
        </div>
    )
}

export default CoursesPage;