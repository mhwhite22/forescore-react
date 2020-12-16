import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoundListItem.css';
import { formatDate } from "../../utils/utilities";

function RoundListItem( { round, courses } ) {
    return (
        <div className='roundListItem card blue-grey darken-2'>
             <div className="card-title">
                <h5>{ formatDate(round.dateOfPlay) } at { courses.map((course) => { 
                    if (course._id === round.course){
                    return course.name
                    }
                })
            }</h5>
           </div>
           <div className='buttonContainer'>
            <div className='card-content'>
                {/* if a scorecard exists, render "details" button that links to scorecard info
                else, render Add a scorecard button with a link to the add scorecard page
                and pass it the round info */}
                   <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: {round}
                    }}
                    >Details</Link>
                {/* <Link to="/rounds"></Link>  */}
            </div>
            <div className='card-content'>
                   <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/addscorecard',
                        state: {round}
                    }}
                    >Add Scorecard</Link>
                {/* <Link to="/rounds"></Link>  */}
            </div>
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