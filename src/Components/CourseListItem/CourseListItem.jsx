import React from 'react';
import { Link } from 'react-router-dom';

function RoundListItem( { course } ) {
    return (
        <div className='panel panel-default'>
             <div className="panel-heading">
            <h4>{course.name}</h4>
    </div>
    <div className='panel-footer RoundListItem-action-paenl'>
                   <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: {course}
                    }}
                    >Details</Link>
                <Link to="/rounds"></Link> 
            </div> 
        </div>
    )
}

export default RoundListItem;