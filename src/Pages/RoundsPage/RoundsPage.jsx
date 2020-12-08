import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import RoundListItem from '../../Components/RoundListItem/RoundListItem';
import styles from './RoundsPage.css'


function RoundsPage(props) {
    return (
        <div className='RoundsPage'>
            <Navbar />
            <div className="pageContainer">
            <div className="header">
            <h4>My Rounds</h4>
            </div>
                {props.rounds.map(round =>
                    <RoundListItem
                    round={round}
                    key={round._id}
                    courses={props.courses}
                    />
                )}
        </div>
        </div>
    );
}

export default RoundsPage;