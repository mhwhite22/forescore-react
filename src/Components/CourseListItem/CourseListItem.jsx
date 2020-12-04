import React from 'react';


function RoundListItem( { course } ) {
    return (
        <div className="roundListItem">
            <h4>{course.name}</h4>
    </div>
    )
}

export default RoundListItem;