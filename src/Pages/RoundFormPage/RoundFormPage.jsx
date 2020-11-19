import React from 'react';
import styles from './RoundFormPage.css';
import Navbar from '../../Components/Navbar/Navbar';

function RoundFormPage(props) {
    return (
        <div className="RoundFormPage">
            <Navbar />
            <h3>A form to add a new round goes here</h3>
        </div>
    )
}

export default RoundFormPage;