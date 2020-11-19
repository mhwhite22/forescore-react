import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import styles from './RoundsPage.css'


function RoundsPage(props) {
    return (
        <div className="RoundsPage">
            <Navbar />
            <h2>Hi I'm the rounds page</h2>
            <h5>I can show you all your rounds</h5>
        </div>
    )
}

export default RoundsPage;