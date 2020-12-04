import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseFormPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import CourseForm from '../../Components/CourseForm/CourseForm';


class CourseFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className="CourseFormPage">
            <Navbar />
            <CourseForm { ...this.props } />
            <Link to='/home'>Back</Link>
            </div>
        );
    }
}
export default CourseFormPage;