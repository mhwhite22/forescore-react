import React from 'react';


// function ScoreDisplay( {round} ) {
//     return(
//         <div className="score">
//             <h2>{round.score}</h2>
//         </div>
//     )
// }

function ScoreDisplay(props) {
    const score = props.score
    console.log(props, score)
    return(
        <div className="score">
            <h2>{score}</h2>
        </div>
    )
}


export default ScoreDisplay;