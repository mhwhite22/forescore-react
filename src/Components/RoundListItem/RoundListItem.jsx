import React from 'react';
import { Link } from 'react-router-dom';
import './RoundListItem';

function RoundListItem( {round } ) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{round.dateofPlay} at {round.course}</h3>
            </div>
            <div className='panel-footer RoundListItem-action-paenl'>
                <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: {round}
                    }}
                    >Details</Link>
                <Link>?</Link>
            </div>
        </div>
    );
}

export default RoundListItem;