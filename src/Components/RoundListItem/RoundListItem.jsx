import React from 'react';
import styles from './RoundListItem.css';

// function RoundListItem( { round } ) {
//     return (
//         <div className='panel panel-default'>
//              <div className="panel-heading">
//                 <h3 className='panel-title'>{round.dateofPlay} at {round.course.name}</h3>
//             </div>
//             <div className='panel-footer RoundListItem-action-paenl'>
//                 <Link
//                     className='btn btn-xs btn-info'
//                     to={{
//                         pathname: '/details',
//                         state: {round}
//                     }}
//                     >Details</Link>
//                 <Link to="/rounds"></Link> 
//             </div> 
//         </div>
//     );
// }

function RoundListItem( { round, courses } ) {
    return (
        console.log(round, courses),
        <div className="roundListItem">
            <p>{round.dateOfPlay} at { courses.map( course => course._id === round.course )} </p>
        </div>
    );
}

export default RoundListItem;