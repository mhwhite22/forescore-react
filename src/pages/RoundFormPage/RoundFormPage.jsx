import React, { Component } from 'react';
import styles from './RoundFormPage.css';
import Navbar from '../../components/Navbar/Navbar';
import RoundForm from "../../components/RoundForm/RoundForm";

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
            </div>
        );
    }
}

export default RoundFormPage;