import React, { useState } from 'react';
import './App.css';

import CardContainer from "./components/CardContainer";
import TopContainer from "./components/TopContainer";
import CardImage from "./components/CardImage";
import NameCard from "./components/NameCard";
import NameDisplay from "./components/NameDisplay";
import SocialContainer from "./components/SocialContainer";
import Overview from "./components/Overview";
import CandidateLinks from "./components/CandidateLinks";
import BottomContainer from "./components/BottomContainer";
import ShowHideButton from "./components/ShowHideButton";
import EndorsementsContainer from "./components/EndorsementsContainer";
import QuestionsContainer from "./components/QuestionsContainer";
import SocialLink from "./components/SocialLink";
import ContactLink from "./components/ContactLink";
import GeneralLink from "./components/GeneralLink";
import QuestionCard from "./components/QuestionCard";



import TwitterIcon from './Icons/TwitterIcon.js';
import IgIcon from './Icons/IgIcon.js';
import WebsiteIcon from './Icons/WebsiteIcon.js';

const CandidateCard = ({obj}) => {
    const [showPanel, togglePanel] = useState(false);

    return (
        <CardContainer>
            <TopContainer>
                <CardImage src={obj.photo} />
                <NameCard>
                    <NameDisplay>{obj.name}</NameDisplay>
                    <SocialContainer>
                        {obj.website ? <SocialLink href={obj.website} target="_blank" rel="noopener noreferrer"><WebsiteIcon width="30px" height="30px" /></SocialLink> : null }
                        {obj.instagram ? <SocialLink href={obj.instagram} target="_blank" rel="noopener noreferrer"><IgIcon width="30px" height="30px" /></SocialLink> : null}
                        {obj.twitter ? <SocialLink href={obj.twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon width="30px" height="30px" /></SocialLink> : null}
                        <ContactLink>{obj.phone}</ContactLink>
                        <ContactLink>{obj.email}</ContactLink>
                    </SocialContainer>
                    <Overview>{obj.overview}</Overview>
                    <CandidateLinks>
                        {obj.links.map((obj) => <GeneralLink obj={obj}/>)}
                    </CandidateLinks>
                </NameCard>
            </TopContainer>
            <BottomContainer>
                {!showPanel && 
                <ShowHideButton onClick={() => togglePanel(!showPanel)}>Show More</ShowHideButton>
                }           
            
                {showPanel && (
                <>
                <ShowHideButton onClick={() => togglePanel(!showPanel)}>Show Less</ShowHideButton>
                <h4>Endorsements:</h4>
                <EndorsementsContainer>
                {obj.endorsements.map((obj) => <GeneralLink obj={obj}/>)}
                </EndorsementsContainer>
                <QuestionsContainer>
                <h4>Questions from Repping:</h4>
                {obj.questions.map((obj) => <QuestionCard obj={obj}/>)}
                </QuestionsContainer>
                </>
            )}
            </BottomContainer>
        </CardContainer>
    );
}

export default CandidateCard;