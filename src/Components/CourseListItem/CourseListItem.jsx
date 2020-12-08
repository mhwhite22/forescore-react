import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseListItem.css'

function RoundListItem( { course } ) {
    return (
    // <div className='panel panel-default'>
        <div className="CourseListItem">
        <div className='courseCard card blue-grey darken-2'>
             {/* <div className="panel-heading"> */}
             <div className="card-title">
            {course.name}
    </div>
    {/* <div className='panel-footer RoundListItem-action-panel'> */}
    <div className='card-content'>
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
        </div>
    )
}

export default RoundListItem;