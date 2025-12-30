import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'

// import leaf from '../public/Leaf.svg'
import logoWithTaglineEng from '../public/NattLockupWithTagline.svg'
import logoWithTaglineIce from '../public/NattLockupWithTagline_is.svg'
// import krossfiskur from '../public/solblomakrossfiskurinn.png'
// import coolfiskurinn from '../public/coolfiskurinn.png'
// import koala from '../public/koala.png'
// import dice from '../public/dice.png'
// import baratta from '../public/baratta.png'
// import fight from '../public/fight.png'
// import coolstar from '../public/coolstar.png'
// import leafPattern from '../public/LeafPattern.png'

import instagram from '../public/instagram.svg'
import tumblr from '../public/tumblr.svg'
import tiktok from '../public/tiktok.svg'
// Placeholder for Facebook icon - add facebook.svg to public folder
// import facebook from '../public/facebook.svg'

// Import new components
import ResponsiveNavigation from './components/ResponsiveNavigation';
import HeroSection from './components/HeroSection';
import CallToAction from './components/CallToAction';
import AboutGame from './components/AboutGame';
import HowToPlay from './components/HowToPlay';
import WhereToBuy from './components/WhereToBuy';
import AdultModeGenerator from './components/AdultModeGenerator';
import NewsUpdates from './components/NewsUpdates';
import CardInfo from './components/CardInfo';
import History from './components/History';
import MeetTheTeam from './components/MeetTheTeam';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Fan from './components/Fan';

import textstringData from './strings.json'

const locale = new URL(document.location)
let curr_lang = ''

if (locale.searchParams.has('lang')) {
    curr_lang = 'en'
    localStorage.setItem('lang', 'en')
    window.location = 'https://natturuval.is/' // 'http://localhost:9000'// 
}

let gamefoundurl = "https://gamefound.com/en/projects/bespoke-games/natturuval"


const App = () => {
    const [currLang, setLang] = useState(() => {
        // Initialize language from localStorage or default to 'is'
        return localStorage.getItem('lang') || 'is';
    });
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Update document language attribute
        document.documentElement.lang = currLang;

        // Update text strings when language changes
        const collection = document.getElementsByName("textstring")
        for (const item of collection) {
            const identifier = item.className.split(' ').find(word => word.includes('_') || '')
            if (identifier && textstringData[0][currLang] && textstringData[0][currLang][identifier]) {
                const replacement = textstringData[0][currLang][identifier]
                item.innerHTML = replacement
            }
        }
    }, [currLang])

    const handleLanguageChange = () => {
        setLang(prevLang => {
            const newLang = prevLang === 'is' ? 'en' : 'is';
            localStorage.setItem('lang', newLang);
            return newLang;
        });
    };

    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="App">
            {/* New Responsive Navigation */}
            <ResponsiveNavigation
                currLang={currLang}
                onLanguageChange={handleLanguageChange}
                onSectionChange={handleSectionChange}
            />

            {/* Hero Section Component */}
            <HeroSection
                currLang={currLang}
            />

            {/* New Components */}
            <AboutGame currLang={currLang} />
            <HowToPlay currLang={currLang} />
            <WhereToBuy currLang={currLang} />
            <AdultModeGenerator currLang={currLang} />
            <NewsUpdates currLang={currLang} />
            <CardInfo currLang={currLang} />
            <History currLang={currLang} />
            <MeetTheTeam currLang={currLang} />

            {/* Final Call to Action Component */}
            <CallToAction gamefoundurl={gamefoundurl} />
        </div >

    );
}

export default App;