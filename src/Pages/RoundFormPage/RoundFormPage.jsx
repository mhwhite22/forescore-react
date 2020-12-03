import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './RoundFormPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import RoundForm from "../../Components/RoundForm/RoundForm";

class RoundFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className="RoundFormPage">
            <Navbar />
            <RoundForm { ...this.props } />
            <Link to='/home'>Back</Link>
            </div>
        );
    }
}

export default RoundFormPage;