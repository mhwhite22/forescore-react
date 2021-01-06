import React from 'react';
//import styles from './StatsBoard.css';


function StatsBoard(props) {
    return(
        // render multiple components with calculated stat values based on characteristics
        /// of recent rounds and their attendant scorecards
        <div className="StatsBoard">
            <p>Placeholder Data</p>
            <ul>
            <li>Average Score past month: 78</li>
            <li>40% of Rounds Played at Jefferson Park</li>
            <li>7.5 average rounds per month</li>
            <li>50% of Fairways in Regulation</li>
            <li>58% of Greens in Regulation</li>
            <li>Fairways missed right: 10%</li>
            <li>Fairways missed left: 40%</li>
            <li>Average putts per round: 28.8</li>
            </ul>

        </div>
    )
}

export default StatsBoard;