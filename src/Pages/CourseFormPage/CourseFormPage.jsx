import React, { Component } from 'react';
import styles from './CourseFormPage.css';
import Navbar from '../../components/Navbar/Navbar';
import CourseForm from '../../components/CourseForm/CourseForm';


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
            </div>
        );
    }
}
export default CourseFormPage;