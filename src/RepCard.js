import React from 'react';
import RepInfo from "./RepInfo"

const RepCard = ({obj}) => {
    return (
        <>
        {obj.id ?
        <div>
            <hr></hr>
            {obj.district ?
            <p>District: {obj.id}, {obj.district}</p>
            : null } 
            {obj.title ? 
            <p>{obj.region} {obj.title}</p>
            : null }

            {obj.loser ? 
            <>
            <p>Current:</p>
            <RepInfo obj={obj.loser.current} />
            <p>Next:</p>
            <RepInfo obj={obj.loser.next} />
            </>
        
            : <RepInfo obj={obj} />}
            <hr></hr>
        </div>
        : 
        <p></p>}       
        </>
    );
}

export default RepCard;
