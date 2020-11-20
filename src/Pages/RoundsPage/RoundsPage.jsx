import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import RoundListItem from '../../Components/RoundListItem/RoundListItem';
import styles from './RoundsPage.css'


function RoundsPage(props) {
    return (
        <>
            <h2>My Rounds</h2>
            <Navbar />
            <div className='RoundsPage-grid'>
                {props.rounds.map(round =>
                    <RoundListItem
                    round={round}
                    key={round._id}
                    />
                )}
        </div>
        </>
    );
}

export default RoundsPage;