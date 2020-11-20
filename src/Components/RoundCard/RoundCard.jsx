import React from 'react';
import { Link } from 'react-router-dom';

function RoundCard({round}) {
    return(
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{round.dateOfPlay} at {round.course}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Course</dt>
                    <dd>{round.course}</dd>
                    <dt>Score</dt>
                    <dd>{round.score}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/rounds'>Return</Link>
            </div>
        </div>
    );
}

export default RoundCard;