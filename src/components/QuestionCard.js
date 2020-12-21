import React from 'react';
import CandidateLinks from "./CandidateLinks"
import GeneralLink from "./GeneralLink"

import QuestionsBox from "./QuestionsBox"


const QuestionCard = ({obj}) => {

    return (
        <QuestionsBox>
        <p>Q: {obj.q}</p>
        <p>A: {obj.a}</p>
        <CandidateLinks>
            {obj.links.map((obj) => <GeneralLink obj={obj}/>)}
        </CandidateLinks>
        </QuestionsBox>
    );
}

export default QuestionCard;