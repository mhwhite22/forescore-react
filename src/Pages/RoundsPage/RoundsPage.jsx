import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import styles from './RoundsPage.css'


function RoundsPage(props) {
    return (
        <div className="RoundsPage">
            <Navbar />
            <h2>My Rounds</h2>
            <div className='RoundsPage-grid'>
            </div>
        </div>
    )
}

export default RoundsPage;