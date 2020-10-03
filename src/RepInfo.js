import React, { useState } from 'react';

const RepInfo = ({obj}) => {
    const [showPanel, togglePanel] = useState(false);

    return (
        <div>
            <p>Name: {obj.name}</p>
            <p>Phone Number: {obj.phone}</p>
            <p>Overview: {obj.overview}</p>
            <p>Notes: {obj.notes}</p>
            {!showPanel && 
            <p onClick={() => togglePanel(!showPanel) }>Expand</p>}
            
            {showPanel && (
                <>
                <p onClick={() => togglePanel(!showPanel) }>Collapse</p>
                <div>
                    <p>Votes:</p>
                    {obj.votes.map((arr) => {
                        return(
                            <p>- {arr.bill}: {arr.vote} | {arr.comment}</p>
                        )
                    })}
                </div>
                </>
            )}
        </div>
    );
}

export default RepInfo;
