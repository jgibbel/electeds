import React from 'react';

const RepInfo = ({obj}) => {
    return (
        <div>
            <p>{obj.name}</p>
            <p>{obj.phone}</p>
            <p>{obj.overview}</p>
            <p>{obj.notes}</p>
        </div>
    );
}

export default RepInfo;
