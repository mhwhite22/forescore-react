import React from 'react';
import styles from './RoundFormPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import RoundForm from "../../Components/RoundForm/RoundForm";

function RoundFormPage(props) {
    return (
        <div className="RoundFormPage">
            <Navbar />
            <RoundForm />
        </div>
    )
}

export default RoundFormPage;