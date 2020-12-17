import React, { Component } from 'react';
import styles from './ScorecardFormPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import ScorecardForm from "../../Components/ScorecardForm/ScorecardForm";

class ScorecardFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className="ScorecardFormPage">
            <Navbar />
            <ScorecardForm { ...this.props } />
            </div>
        );
    }
}

export default ScorecardFormPage;