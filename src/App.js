import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import leaf from '../public/Leaf.svg'
import logoWithTaglineEng from '../public/NattLockupWithTagline.svg'
import logoWithTaglineIce from '../public/NattLockupWithTagline_is.svg'
import krossfiskur from '../public/solblomakrossfiskurinn.png'
import coolfiskurinn from '../public/coolfiskurinn.png'
import koala from '../public/koala.png'
import dice from '../public/dice.png'
import baratta from '../public/baratta.png'
import fight from '../public/fight.png'
import coolstar from '../public/coolstar.png'
import leafPattern from '../public/LeafPattern.png'

import instagram from '../public/instagram.svg'
import tumblr from '../public/tumblr.svg'
import tiktok from '../public/tiktok.svg'
// Placeholder for Facebook icon - add facebook.svg to public folder
// import facebook from '../public/facebook.svg'

// Import new components
import ResponsiveNavigation from './components/ResponsiveNavigation';
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
let instasocial = 'https://www.instagram.com/natturuval/'
let tumblrsocial = 'https://www.tumblr.com/blog/natturuval'
let tiktoksocial = 'https://www.tiktok.com/@natturuval'
let facebooksocial = 'https://www.facebook.com/natturuval' // Add your actual Facebook page URL

const App = () => {
    const [currLang, setLang] = useState(() => {
        // Initialize language from localStorage or default to 'is'
        return localStorage.getItem('lang') || 'is';
    });
    const [activeSection, setActiveSection] = useState('home');

    // Update images based on current language
    const logoImage = currLang === 'en' ? logoWithTaglineEng : logoWithTaglineIce;
    const fightImage = currLang === 'en' ? fight : baratta;
    const coolfish = currLang === 'en' ? coolstar : coolfiskurinn;

    useEffect(() => {
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

            {/* Hero Section - Updated for mobile */}
            <section id="home" className='App-main'>
                <Container className="px-3">
                    <Row>
                        <Col xs={12} className="text-center">
                            <div className="mb-3 mb-md-4">
                                <img src={logoImage} className="img-fluid" style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} alt="logo" />
                            </div>
                        </Col>
                    </Row>
                    {/* <div className="text-center mb-4 mb-md-5">
                        <p className="someFont main_subtext lead px-2 text-start" name="textstring"></p>
                    </div> */}

                    {/* Social Media - Mobile Optimized */}
                    <Row>
                        <Col xs={12} className="px-3">
                            <div className='social-media d-flex flex-column align-items-center justify-content-center mt-4'>
                                {/* Mobile: Stack vertically, Desktop: Side by side with proper spacing */}
                                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-2 w-100" style={{ gap: '2rem' }}>
                                    <h4 className="social_media mb-0 text-center order-1 order-md-1" name="textstring" style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '500'
                                    }}></h4>
                                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 order-2 order-md-2">
                                        <div className="social-media-icon" onClick={() => window.open(instasocial)}>
                                            <img src={instagram} width="40" height="40" alt="instagram social icon" />
                                        </div>
                                        <div className="social-media-icon" onClick={() => window.open(tiktoksocial)}>
                                            <img src={tiktok} width="40" height="40" alt="tiktok social icon" />
                                        </div>
                                        <div className="social-media-icon" onClick={() => window.open(tumblrsocial)}>
                                            <img src={tumblr} width="40" height="40" alt="tumblr social icon" />
                                        </div>
                                        {/* Facebook placeholder - add facebook.svg to public folder and uncomment */}
                                        <div className="social-media-icon" onClick={() => window.open(facebooksocial)}>
                                            {/* Replace this with: <img src={facebook} width="40" height="40" alt="facebook social icon" /> */}
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: '#1877f2',
                                                borderRadius: '6px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '18px',
                                                cursor: 'pointer'
                                            }}>
                                                f
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline-success"
                                        onClick={() => window.open(gamefoundurl)}
                                        className="rounded btn d-block mx-auto mx-md-0 order-3 order-md-3"
                                        style={{
                                            color: 'black',
                                            borderColor: '#198754',
                                            minWidth: '200px',
                                            width: '100%',
                                            maxWidth: '300px',
                                            fontSize: '1.1rem',
                                            fontWeight: '500',
                                            padding: '12px 24px'
                                        }}
                                    >
                                        <span name="textstring" className="call_to_action_button_text_1"></span>
                                        <span name="textstring" className="call_to_action_button_text_1_short mb-0 d-block d-md-none"></span>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Call to Action */}
                </Container>
            </section>

            {/* New Components */}
            <AboutGame currLang={currLang} />
            <HowToPlay currLang={currLang} />
            <WhereToBuy currLang={currLang} />
            <AdultModeGenerator currLang={currLang} />
            <NewsUpdates currLang={currLang} />
            <CardInfo currLang={currLang} />
            <History currLang={currLang} />
            <MeetTheTeam currLang={currLang} />

            {/* <section className='App-gamefound py-5' id="crowdfunding">
                <div className='container-background position-relative rounded' style={{ backgroundImage: `url(${leafPattern})`, minHeight: '400px' }}>
                    <div className="position-absolute w-100 h-100 rounded" style={{backgroundColor: 'rgba(255,255,255,0.9)'}}></div>
                    <Container className='position-relative'>
                        <Row className="align-items-center mb-5">
                            <Col xs={1} className="text-end">
                                <img src={dice} width="30" height="30" alt="dice" className="me-2" />
                            </Col>
                            <Col xs={11}>
                                <h1 className="mb-0 text-success border border-success rounded px-3 py-2 crowdfunding_title" style={{display: 'inline-block'}} name="textstring"></h1>
                            </Col>
                        </Row>
                        <div className="gamefound">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <p name="textstring" className="crowdfunding_text_1 mb-4 text-start"></p>
                                    <p name="textstring" className="crowdfunding_text_2 mb-4 text-start"></p>
                                    <p name="textstring" className="crowdfunding_text_3 mb-4 text-start"></p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section> */}

            {/* Final Call to Action */}
            <Container className="mt-5 mb-5">
                <Row>
                    <Col xs={12} className="px-3">
                        <div className="d-flex justify-content-center">
                            <Button
                                variant="outline-success"
                                onClick={() => window.open(gamefoundurl)}
                                className="rounded btn"
                                style={{
                                    color: 'black',
                                    borderColor: '#198754',
                                    minWidth: '200px',
                                    width: '100%',
                                    maxWidth: '600px',
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    padding: '12px 24px',
                                    textAlign: 'center'
                                }}
                            >
                                <span name="textstring" className="call_to_action_button_text_1"></span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >

    );
}

export default App;