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
import justin from '../public/justin.jpeg'
import valborg from '../public/valborgS2.jpeg'
import rokkvi from '../public/xsR2.jpeg'
import storyRokkvi from '../public/rokkvi12.jpeg'
import kate from '../public/katep2.jpeg'
import prototypeArt from '../public/prototypeArt.jpg'
import prototypeComparison from '../public/OldAndNewDiceAndBox.jpg'
import basicLayout from '../public/basicLayout.jpg'
import grass from '../public/GrassPattern.svg'
import leafPattern from '../public/LeafPattern.png'
import instagram from '../public/instagram.svg'
import tumblr from '../public/tumblr.svg'
import tiktok from '../public/tiktok.svg'
import krossfiskur from '../public/solblomakrossfiskurinn.png'
import coolfiskurinn from '../public/coolfiskurinn.png'
import koala from '../public/koala.png'
import dice from '../public/dice.png'
import baratta from '../public/baratta.png'
import fight from '../public/fight.png'
import coolstar from '../public/coolstar.png'

// Import new components
import ResponsiveNavigation from './components/ResponsiveNavigation';
import AboutGame from './components/AboutGame';
import HowToPlay from './components/HowToPlay';
import WhereToBuy from './components/WhereToBuy';
import AdultModeGenerator from './components/AdultModeGenerator';
import NewsUpdates from './components/NewsUpdates';
import CardInfo from './components/CardInfo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Fan from './components/Fan';

import textstringData from './strings.json'
import { CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

const locale = new URL(document.location)
let curr_lang = ''

if(locale.searchParams.has('lang')){
    curr_lang = 'en'
    localStorage.setItem('lang', 'en')
    window.location = 'https://natturuval.is/' // 'http://localhost:9000'// 
}

let gamefoundurl = "https://gamefound.com/en/projects/bespoke-games/natturuval"
let instasocial = 'https://www.instagram.com/natturuval/'
let tumblrsocial = 'https://www.tumblr.com/blog/natturuval'
let tiktoksocial = 'https://www.tiktok.com/@natturuval'

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
                <Container>
                    <div className="text-center mb-4 mb-md-5">
                        <img src={logoImage} className="img-fluid" style={{maxWidth: '100%', height: 'auto'}} alt="logo"/>
                    </div>
                    <div className="text-center mb-4 mb-md-5">
                        <p className="someFont main_subtext lead px-2 text-start" name="textstring"></p>
                    </div>
                    
                    {/* Social Media - Mobile Optimized */}
                    <div className='social-media d-flex flex-column flex-md-row align-items-center justify-content-center mt-5'>
                        <h4 className="social_media mb-3 mb-md-0 me-md-3" name="textstring"></h4>
                        <div className="d-flex">
                            <div className="social-media-icon mx-2" onClick={() => window.open(instasocial)}>
                                <img src={instagram} width="50" height="50" alt="instagram social icon" />
                            </div>
                            <div className="social-media-icon mx-2" onClick={() => window.open(tiktoksocial)}>
                                <img src={tiktok} width="50" height="50" alt="tiktok social icon" />
                            </div>
                            <div className="social-media-icon mx-2" onClick={() => window.open(tumblrsocial)}>
                                <img src={tumblr} width="50" height="50" alt="tumblr social icon" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="leaf-action mt-4" onClick={() => window.open(gamefoundurl)} role="button">
                        <h3 name="textstring" className="call_to_action_button_text_1 mb-2"></h3>
                        <p name="textstring" className="call_to_action_button_text_1_short mb-0"></p>
                    </div>
                </Container>
            </section>

            {/* New Components */}
            <AboutGame currLang={currLang} />
            <HowToPlay currLang={currLang} />
            <WhereToBuy currLang={currLang} />
            <AdultModeGenerator currLang={currLang} />
            <NewsUpdates currLang={currLang} />
            <CardInfo currLang={currLang} />

            {/* Original Sections - Updated for mobile */}
            <section className='App-history bg-light' id="history">
                <Container>
                    <Row className="justify-content-center mb-5">
                        <Col xs={12} className="text-center">
                            <div className="section-heading-container d-inline-flex align-items-center">
                                <h1 className="mb-0 text-success border border-success rounded px-3 py-2 history_title d-flex align-items-center" name="textstring">
                                    <img src={dice} width="24" height="24" alt="dice" className="me-2" />
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <div className="firstHistory">
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={4} className="mb-4 mb-md-0">
                                <img src={storyRokkvi} className="img-fluid rounded shadow" style={{maxHeight: '300px', objectFit: 'cover'}} alt="old-card-1.0" />
                            </Col>
                            <Col xs={12} md={8}>
                                <p name="textstring" className="history_origin text-start"></p>
                            </Col>
                        </Row>
                        
                        <div className="text-center my-4">
                            <img src={grass} className="img-fluid" style={{height: '50px', width: '100%'}} alt="grassy pattern" />
                        </div>
                        
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={4} className="order-md-2 mb-4 mb-md-0">
                                <img src={basicLayout} className="img-fluid rounded shadow" style={{maxHeight: '300px', objectFit: 'cover'}} alt="old-card-2.0" />
                            </Col>
                            <Col xs={12} md={8} className="order-md-1">
                                <p name="textstring" className="history_decisions text-start"></p>
                            </Col>
                        </Row>
                        
                        <div className="text-center my-4">
                            <img src={grass} className="img-fluid img-flip" style={{height: '50px', width: '100%'}} alt="grassy pattern" />
                        </div>
                        
                        <Row className='align-items-center'>
                            <Col xs={12} md={4} className="mb-4 mb-md-0">
                                <img src={prototypeArt} className="img-fluid rounded shadow" style={{maxHeight: '300px', objectFit: 'cover'}} alt="prototype art" />
                            </Col>
                            <Col xs={12} md={8}>
                                <p name="textstring" className="history_version_1 text-start"></p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            
            <section className="App-about py-5" id="team">
                <Container>
                    <Row className="justify-content-center mb-5">
                        <Col xs={12} className="text-center">
                            <div className="section-heading-container d-inline-flex align-items-center">
                                <h1 className="mb-0 text-success border border-success rounded px-3 py-2 meet_the_team d-flex align-items-center" name="textstring">
                                    <img src={dice} width="24" height="24" alt="dice" className="me-2" />
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                            <Card className='h-100 m-0 shadow-sm rounded'>
                                <CardImg src={valborg} className="card-img-top rounded-top" style={{height: '250px', objectFit: 'cover'}} alt="picture of a smiling Valborg by a sowing machine"></CardImg>
                                <CardBody className="d-flex flex-column">
                                    <CardTitle>Valborg Sturludóttir</CardTitle>
                                    <CardText className="valborg_text flex-grow-1 text-start" name="textstring"></CardText>
                                    <Button variant="outline-success" className='btn valborg_button mt-auto rounded' href="https://github.com/valborg" name="textstring"></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                            <Card className='h-100 m-0 shadow-sm rounded'>
                                <CardImg src={justin} className="card-img-top rounded-top" style={{height: '250px', objectFit: 'cover'}} alt="Justin smiling professionally straight into the camera" ></CardImg>
                                <CardBody className="d-flex flex-column">
                                    <CardTitle>Justin Richer</CardTitle>
                                    <CardText className="justin_text flex-grow-1 text-start" name="textstring"></CardText>
                                    <Button href="https://bspk.io" variant="outline-success" className="btn justin_button mt-auto rounded" name="textstring"></Button>
                                </CardBody >
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                            <Card className='h-100 m-0 shadow-sm rounded'>
                                <CardImg src={rokkvi} className="card-img-top rounded-top" style={{height: '250px', objectFit: 'cover'}} alt="Rökkvi Þór apprehensive about formal dresswear"></CardImg>
                                <CardBody className="d-flex flex-column">
                                    <CardTitle>Rökkvi Þór</CardTitle>
                                    <CardText className="rokkvi_text flex-grow-1 text-start" name="textstring"></CardText>
                                    <Button href="" variant="outline-success" className="btn rokkvi_button mt-auto rounded" name="textstring" ></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                            <Card className='h-100 m-0 shadow-sm rounded'>
                                <CardImg src={kate} className="card-img-top rounded-top" style={{height: '250px', objectFit: 'cover'}} alt="Kate really impressed either by their ability to attract bugs or the bug itself"></CardImg>
                                <CardBody className="d-flex flex-column">
                                    <CardTitle>Kate Estrop</CardTitle>
                                    <CardText className="kate_text flex-grow-1 text-start" name="textstring"></CardText>
                                    <Button href="https://kateestrop.com/" variant="outline-success" className="btn kate_button mt-auto rounded" name="textstring">Go bug them</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
           
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
            <div className="leaf-action" onClick={() => window.open(gamefoundurl)} role="button">
                <h3 name="textstring" className="call_to_action_button_text_2 mb-2"></h3>
                <p name="textstring" className="call_to_action_button_text_2_short mb-0"></p>
            </div>
        </div >

    );
}

export default App;