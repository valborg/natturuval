import React, { useEffect, useState } from 'react';

import ResponsiveNavigation from './components/ResponsiveNavigation';
import HeroSection from './components/HeroSection';
import CallToAction from './components/CallToAction';
import AboutGame from './components/AboutGame';
import HowToPlay from './components/HowToPlay';
import WhereToBuy from './components/WhereToBuy';
import AdultModeGenerator from './components/AdultModeGenerator';
import NewsUpdates from './components/NewsUpdates';
import CardInfo from './components/CardInfo';
import CardCorrections from './components/CardCorrections';
import History from './components/History';
import MeetTheTeam from './components/MeetTheTeam';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
            <CardCorrections currLang={currLang} />
            <AdultModeGenerator currLang={currLang} />
            <NewsUpdates currLang={currLang} />
            <CardInfo currLang={currLang} />
            <History currLang={currLang} />
            <MeetTheTeam currLang={currLang} />

            {/* Final Call to Action Component */}
            <CallToAction WhereToBuyUrl={currLang} />
        </div >

    );
}

export default App;