import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoundListItem.css';
import { formatDate } from "../../utils/utilities";

function RoundListItem( { round, courses } ) {
    return (
        <div className='card blue-grey darken-2'>
        {/* <div className='roundListItem panel panel-default'> */}
             <div className="card-title">
             {/* <div className="panel-heading"> */}
                <h5>{ formatDate(round.dateOfPlay) } at { courses.map((course) => { 
                    if (course._id === round.course){
                    return course.name
                    }
                })
            }</h5>
           </div>
            <div className='card-content'>
            {/* <div className='panel-footer RoundListItem-action-panel'> */}
                   <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: {round}
                    }}
                    >Details</Link>
                <Link to="/rounds"></Link> 
            </div> 
        </div>
    );
}

// function RoundListItem( { round, courses } ) {
//     return (
//         <div className="roundListItem">
//             <h5>{ formatDate(round.dateOfPlay) } at { courses.map((course) => { 
//                 if (course._id === round.course){
//                     return course.name
//                 }
//             })
//         }</h5>
//     </div>
//     )
// }

export default RoundListItem;