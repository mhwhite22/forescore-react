import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import RoundListItem from '../../Components/RoundListItem/RoundListItem';
import styles from './RoundsPage.css'


function RoundsPage(props) {
    return (
        <div className='RoundsPage'>
            <Navbar />
            <h2>My Rounds</h2>
                {props.rounds.map(round =>
                    <RoundListItem
                    round={round}
                    key={round._id}
                    courses={props.courses}
                    />
                )}
        </div>
    );
}

export default RoundsPage;