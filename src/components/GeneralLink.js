import React from 'react';
import LinkContainer from './LinkContainer';

const GeneralLink = ({obj}) => {

    return (
        <LinkContainer href={obj.link} target="_blank" rel="noopener noreferrer">
        {obj.text}
        </LinkContainer>
    );
}

export default GeneralLink;