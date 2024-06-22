import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import leaf from '../public/Leaf.svg'
import logoWithTagline from '../public/NattLockupWithTagline.svg'
import justin from '../public/justin.jpeg'
import valborg from '../public/valborgS2.jpeg'
import rokkvi from '../public/xsR2.jpeg'
import kate from '../public/katep2.jpeg'
import prototypeArt from '../public/prototypeArt.jpg'
import prototypeComparison from '../public/OldAndNewDiceAndBox.jpg'
import basicLayout from '../public/basicLayout.jpg'
import grass from '../public/GrassPattern.svg'
import videostill from '../public/videostill.jpeg'
import leafPattern from '../public/LeafPattern.png'
import instagram from '../public/instagram.svg'
import tumblr from '../public/tumblr.svg'
import tiktok from '../public/tiktok.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Fan from './components/Fan';

import textstringData from './strings.json'
import { CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
console.log(textstringData)

let CURR_LANG = "en"
let gamefoundurl = "https://gamefound.com/en/projects/bespoke-games/natturuval"
let instasocial = 'https://www.instagram.com/natturuval/'
let tumblrsocial = 'https://www.tumblr.com/blog/natturuval'
let tiktoksocial = 'https://www.tiktok.com/@natturuval'

function changeLanguages() {
    CURR_LANG = CURR_LANG === 'en' ? 'is' : 'en'
    const collection = document.getElementsByName("textstring")
    for (const item of collection) {
        const identifier = item.className.split(' ').find(word => word.includes('_') || '')
        const replacement = textstringData[0][CURR_LANG][identifier]
        document.getElementsByClassName(identifier)[0].innerHTML = replacement
    }
}



const App = () => {
    const [currLang, setLang] = useState('is')
    useEffect( () => {
        changeLanguages()
    }, [currLang])
    return (
        <div className="App">
            {/* <Container fluid > */}

            <Navbar bg="light" expand="lg" className='topnav'>
                <Nav activeKey="/home">
                    <img src={leaf} width="40px" height="auto" alt="leaf" />
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Item>
                            <Nav.Link href="#team" name="textstring" className="nav_team"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#history" name="textstring" className="nav_history"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#crowdfunding" name="textstring" className="nav_crowdfunding"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link target="_blank" name="textstring" className="nav_gamefound" href={gamefoundurl}> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {/* U+1F1EC U+1F1E7	&#127468 &#127463 English flag
                        U+1F1EE U+1F1F8	&#127470 &#127480 Icelandic flag */}
                            <Nav.Link onClick={setLang} className="nav_flag" name="textstring" >🇮🇸</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </Container> */}
            <section id="main" className='App-main'>
                <Container>
                    <img src={logoWithTagline} width="100%" height="auto" alt="logo" />
                    <div>
                        <p className="someFont main_subtext" name="textstring" ></p>
                    </div>
                    <img
                        src={videostill}
                        alt="pic id code"
                        onClick={() => window.open(gamefoundurl)}
                        role="button"
                        tabIndex="0"
                        target="#"
                        width="100%" 
                        height="auto"
                    />
                </Container>
                <div className='social-media d-flex'>
                    <h4 className="social_media" name="textstring"></h4>
                    <div className="social-media-icon" onClick={() => window.open(instasocial)}>
                        <img src={instagram} width="100%" height="50px" alt="instagram social icon" />
                    </div>
                    <div className="social-media-icon" onClick={() => window.open(tiktoksocial)}>
                        <img src={tiktok} width="100%" height="50px" alt="tiktok social icon" />
                    </div>
                    <div className="social-media-icon" onClick={() => window.open(tumblrsocial)}>
                        <img src={tumblr} width="100%" height="50px" alt="tumblr social icon" />
                    </div>
                </div>
                <div className="App-action">
                </div >
                <div className="leaf-action" onClick={() => window.open(gamefoundurl)} target='#'>
                    <h3 name="textstring" className="call_to_action_button_text_1"></h3>
                    <p name="textstring" className="call_to_action_button_text_1_short"></p>
                </div>
            </section>
            <section className="App-about" id="team">
                <h1 name="textstring" className="meet_the_team"></h1>
                <Row className="d-flex justify-content-center">
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={valborg} width="100%" height="auto" className="card-img-top" alt="picture of a smiling Valborg by a sowing machine"></CardImg>
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Valborg Sturludóttir
                                </CardTitle>
                                <CardText className="valborg_text" name="textstring"></CardText>
                                <Button variant="outline-success" className='btn valborg_button mt-auto' href="https://github.com/valborg" name="textstring"></Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={justin} width="100%" height="auto" className="card-img-top" alt="Justin smiling professionally straight into the camera" ></CardImg>
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Justin Richer</CardTitle>
                                <CardText className="justin_text" name="textstring"></CardText>
                                    <Button href="https://bspk.io" variant="outline-success" className="btn justin_button mt-auto" name="textstring"></Button>
                            </CardBody >
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={rokkvi} width="100%" height="auto" className="card-img-top" alt="Rökkvi Þór apprehensive about formal dresswear"></CardImg>
                            <CardBody className="d-flex flex-column">
                            <CardTitle>Rökkvi Þór</CardTitle>
                            <CardText className="rokkvi_text" name="textstring"></CardText>
                                        <Button href="" variant="outline-success" className="btn rokkvi_button mt-auto" name="textstring" ></Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={kate} width="100%" height="auto" className="card-img-top" alt="Kate really impressed either by their ability to attract bugs or the bug itself"></CardImg>
                            <CardBody className="d-flex flex-column">
                            <CardTitle>Kate Estrop</CardTitle>
                            <CardText className="kate_text" name="textstring"></CardText>
                                    <Button href="https://kateestrop.com/" variant="outline-success" className="btn kate_button mt-auto" name="textstring">Go bug them</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className='App-history' id="history">
                <h1 name="textstring" className="history_title"></h1>
                <div className="firstHistory">
                    <Row className="d-flex justify-content-center">
                        <Col className='col-sm-12 col-md-4 col-lg-6'>
                            <img src={basicLayout} width="100%" height="auto" alt="old-card-1.0" />
                        </Col>
                        <Col className='col-sm-12 col-md-8 col-lg-6'>
                            <p name="textstring" className="history_origin"></p>
                        </Col>
                    </Row>
                    <Row className="d-flex">
                        <Col className='grass-img d-flex'>
                            <img src={grass} width="100%" height="50px" alt="grassy pattern" />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className='col-sm-12 col-md-8 col-lg-6'>
                        <p name="textstring" className="history_decisions"></p>
                        </Col>
                        <Col className='col-sm-12 col-md-4 col-lg-6'>
                            <img src={prototypeArt}alt="old-card-2.0" />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className='grass-img d-flex'>
                            <img src={grass} width="100%" height="50px" alt="grassy pattern" className='img-flip'/>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center'>
                      <Col className='col-sm-12 col-md-4 col-lg-6'>
                            <img src={prototypeComparison} width="100%" height="auto" alt="old-card-2.0" />
                        </Col>
                        <Col className='col-sm-12 col-md-8 col-lg-6'>
                            <p name="textstring" className="history_version_1"></p>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='App-gamefound' id="crowdfunding"  >
                <Container className='container-background' style={{ backgroundImage: `url(${leafPattern})`}}>
                </Container>
                <Container className='content'>
                <h1 name="textstring" className="crowdfunding_title"></h1>
                <div className="gamefound">
                    <p name="textstring" className="crowdfunding_text_1" ></p>
                    <p name="textstring" className="crowdfunding_text_2" ></p>
                    <p name="textstring" className="crowdfunding_text_3" ></p>
                </div>
                </Container>
            </section>
            <div className="leaf-action" onClick={() => window.open(gamefoundurl)} target='#'>
                <h3 name="textstring" className="call_to_action_button_text_2" ></h3>
                <p name="textstring" className="call_to_action_button_text_2_short"></p>
            </div>
        </div >

    );
}

export default App;