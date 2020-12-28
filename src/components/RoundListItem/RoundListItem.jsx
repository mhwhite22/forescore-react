import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoundListItem.css';
import { formatDate } from "../../utils/utilities";
import { render } from '@testing-library/react';
import RoundListButton from '../RoundListButton/RoundListButton';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';

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
               <RoundListButton round={round} />
               <ScoreDisplay round={round} />
             {/* <div className='card-content'>
                    <Link
                     className='btn btn-xs btn-info'
                     to={{
                         pathname: '/details',
                         state: {round}
                     }}
                     >Details</Link>
             </div>  */}
             {/* <div className='card-content'>
                      <Link
                     className='btn btn-xs btn-info'
                 to={{
                         pathname: '/addscorecard',
                         state: {round}
                     }}
                     >Add Scorecard</Link>
             </div>*/}
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