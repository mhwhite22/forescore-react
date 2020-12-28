import React, { Component } from 'react';
import styles from './ScorecardFormPage.css';
import Navbar from '../../components/Navbar/Navbar';
import ScorecardForm from "../../components/ScorecardForm/ScorecardForm";

class ScorecardFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: this.props.location.round
        }
    }
    render() {
        return(
            <div className="ScorecardFormPage">
            <Navbar />
            <ScorecardForm round={this.round}/>
            </div>
        );
    }
}

export default ScorecardFormPage;