import React from 'react';
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({text,link, btnText}) => (
    <div className='info-box'>
        <p>{text}</p>
        <Link to = {link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm Brandon Chin! A software engineer enthusiast 👋
        </h1>
    ),
    2:(
        <InfoBox
            text="Eat, sleep, code, coffee, coffee, code, coffee"
            link="/"
            btnText="Look at me"
        />
    ),
    3:(
        <InfoBox
            text="coffee, coffee, code, coffee"
            link="/"
            btnText="Three"
        />
    ),
    4:(
        <InfoBox
            text="Eat, sleep, code, coffee"
            link="/"
            btnText="Four"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
