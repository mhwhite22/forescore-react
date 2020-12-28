import React from 'react';
import styles from './Greeting.css';
import StatsBoard from '../StatsBoard/StatsBoard';

function Greeting(props) {
    return (
        <div className="greeting card blue-grey darken-2">
        <h3>Hello, { props.handle }</h3>
        <p>Here are the stats from your most recent rounds:</p>
        <StatsBoard />
        </div>
    )
}

export default Greeting;