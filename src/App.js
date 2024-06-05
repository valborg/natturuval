import React from 'react';
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
import rokkvi from '../public/rokkvi12.jpeg'
import kate from '../public/kate.jpg'
import socials from '../public/socials.jpeg'
import prototypeArt from '../public/prototypeArt.jpg'
import prototypeComparison from '../public/OldAndNewDiceAndBox.jpg'
import basicLayout from '../public/basicLayout.jpg'
import grass from '../public/GrassPattern.svg'
import videostill from '../public/videostill.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Fan from './components/Fan';

import textstringData from './strings.json'
import { CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
console.log(textstringData)

let CURR_LANG = "en"
let gamefoundurl = "https://gamefound.com/en/projects/bespoke-games/natturuval"

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
                            <Nav.Link href="#team" name="textstring" className="nav_team">The team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#history" name="textstring" className="nav_history">The story</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#crowdfunding" name="textstring" className="nav_crowdfunding">Crowdfunding</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link target="_blank" name="textstring" className="nav_gamefound" href={gamefoundurl}>
                                Visit Gamefound
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {/* U+1F1EC U+1F1E7	&#127468 &#127463 English flag
                        U+1F1EE U+1F1F8	&#127470 &#127480 Icelandic flag */}
                            <Nav.Link onClick={changeLanguages} className="nav_flag" name="textstring" >🇮🇸</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </Container> */}
            <section id="main" className='App-main'>
                <Container>
                    <img src={logoWithTagline} width="100%" height="auto" alt="logo" />
                    <p className="someFont main_subtext" name="textstring" >We are proud to present our game Náttúruval, a great game for the whole family. The game is based on real life information of over 100 animals and is composed of an elegant deck of cards and custome dice. The game is about competition between the animals and the winner might surprise you. The game is funded via crowdfunding on the Gamefound platform, please visit it at <a href={gamefoundurl}>{gamefoundurl}</a></p>
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
                <div className="App-action">
                </div >
                <div className="leaf-action" style={{ backgroundImage: `url(${leaf})` }}>
                    <a name="textstring" className="call_to_action_button_text_1" href={gamefoundurl} target='#'>Check it out!</a>
                </div>
            </section>
            <section className="App-about" id="team">
                <h1 name="textstring" className="meet_the_team">Meet the team!</h1>
                <Row className="d-flex justify-content-center">
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={valborg} width="100%" height="auto" className="card-img-top" alt="picture of a smiling Valborg by a sowing machine"></CardImg>
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Valborg Sturludóttir
                                </CardTitle>
                                <CardText className="valborg_text" name="textstring">A mother, a programmer, a teacher, a nerd, a lover of nature and a she can quote Mel Brook's Spaceballs at the most opportune moments. This project organically fit to her interest; creativity, games, spending time with her kids and datasets.
                                </CardText>
                                <Button variant="outline-success" className='btn valborg_button mt-auto' href="https://github.com/valborg" name="textstring">Go on a nerdy adventure</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={justin} width="100%" height="auto" className="card-img-top" alt="Justin smiling professionally straight into the camera" ></CardImg>
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Justin Richer</CardTitle>
                                <CardText className="justin_text" name="textstring">Software security expert by day, and a musician by night. He has published the game about the thrill of Boston traffic, Gridlocked. He has also made several expansions to the popular game Cards Against humanity called Cards Against Identity, his expertise and interest do lie in cyber security.
                                    </CardText>
                                    <Button href="https://bspk.io" variant="outline-success" className="btn justin_button mt-auto" name="textstring">Go safely</Button>
                            </CardBody >
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={rokkvi} width="100%" height="auto" className="card-img-top" alt="Rökkvi Þór apprehensive about formal dresswear"></CardImg>
                            <CardBody className="d-flex flex-column">
                            <CardTitle>Rökkvi Þór</CardTitle>
                            <CardText className="rokkvi_text" name="textstring">A young man who can't wait to tell you facts about animals, and likely one you've not heard of. He is ten years old. His main interests are animals and badminton.
                            </CardText>
                                        <Button href="" variant="outline-success" className="btn rokkvi_button mt-auto" name="textstring" >Go get my game!</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-6 col-xl-3 p-3'>
                        <Card className='h-100 m-0'>
                            <CardImg src={kate} width="100%" height="auto" className="card-img-top" alt="Kate really impressed either by their ability to attract bugs or the bug itself"></CardImg>
                            <CardBody className="d-flex flex-column">
                            <CardTitle>Kate Estrop</CardTitle>
                            <CardText className="kate_text" name="textstring">An artist from Boston who has been doing all sorts of work, from teaching to freelance graphic design. But this is the first game that they have worked on from the start. Because Kate is a specialist at drawing animals, and especially insects, this project intrigued them. Their Mola mola got a big role in the campaign as soon as it was sketched into being.
                            </CardText>
                                    <Button href="https://kateestrop.com/" variant="outline-success" className="btn kate_button mt-auto" name="textstring">Go bug them</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className='App-history' id="history">
                <h1 name="textstring" className="history_title">The story behind the game</h1>
                <div className="firstHistory">
                    <Row className="d-flex justify-content-center">
                        <Col className='col-sm-12 col-md-4 col-lg-4'>
                            <img src={basicLayout} width="100%" height="auto" alt="old-card-1.0" />
                        </Col>
                        <Col className='col-sm-12 col-md-8 col-lg-8'>
                            <p name="textstring" className="history_origin">Rökkvi Þór, who's favorite scientist is Sir David Frederick Attenborough, asked his mother one day to create \"little cards\" with information about animals. Valborg, his mother, started collecting data about the animals he wanted to learn about. Mind you this kid at age five in a game of twenty questions thought about the Atlantic fur seal. The datapoints were to be numerical, like length, wingspan, weight, average amount of sleep, distance traveled, speed, amount of eyes and other things that were measurable. But the stats needed to be collectable for all animals so many of those categories were unrealistic ( or uninteresting like the amount of eyes).</p>
                        </Col>
                    </Row>
                    <Row className="d-flex">
                        <Col className=' d-flex'>
                            <img src={grass} width="100%" height="1%" alt="grassy pattern" />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className='col-sm-12 col-md-8 col-lg-8'>
                        <p name="textstring" className="history_decisions">The categories that were chosen were the length of an adult head to toe, average amount of offspring at a time, and average lifespan in the wild. Subsequently two easily aquired categories were introduced. Both because then you could roll a six sided die to randomly select a category and because a 4 sided die did not exist in the home at that point. Those were the amount of legs the creature has (of a healthy adult, the average amount would always be lower) and how many letters are in its scientific name. At that point they started printing out cards, pictures with CC licences, and started playing. They didn't have more than 13 cards when they had multiple ways of playing. Then slowly they added more cards, 9 at a time to fill one a4 sheet of paper.
                            </p>
                        </Col>
                        <Col className='col-sm-12 col-md-4 col-lg-4'>
                            <img src={prototypeArt}alt="old-card-2.0" />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className=' d-flex'>
                            <img src={grass} width="100%" height="auto" alt="grassy pattern" className='img-flip'/>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center'>
                      <Col className='col-sm-12 col-md-4 col-lg-4'>
                            <img src={prototypeComparison} width="100%" height="auto" alt="old-card-2.0" />
                        </Col>
                        <Col className='col-sm-12 col-md-8 col-lg-8'>
                            <p name="textstring" className="history_version_1">
                            One day Justin and his wife came over for a visit and Rökkvi showed them the game. Justin thought it had a lot of potential inspite the raw inkscape design. So when he went back home to Boston he decided to improve on the design thouroughly and print a prototype in English and Icelandic. He sent a copy to the duo in Iceland. However the prototype with that printer wasn't really a viable option because the retail value would have to be around 50USD and that dream was crushed essentially. Justin didn't give up so easily and contacted another trusted printer which gave us the ability to retail the game at only 20USD. That's when he said that even his excellent prototype wasn't enough for a commercial product and that they should consult a professional. That is how Kate got involved and elevated the project to great hights.</p>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='App-gamefound'>
                <h1 name="textstring" className="crowdfunding_title">How crowdfunding works</h1>
                <Row>
                    <Col className="socials">
                    <img src={socials} width="100%" height="auto" alt="old-card-2.0" />
                    </Col>
                    <Col>
                <div className="gamefound">
                    <p name="textstring" className="crowdfunding_text_1" >Crowdfunding gives amateurs a chance to make commercial products without a large upfront investment. So instead of designing a product, producing it and then shipping it to stores, people can give others a chance to pledge to buy something that is offered in the crowdfundin project. It could be only the game or more copies and some exclusive items. By doing this people are saying that they promise to buy the product only if it gets fully funded and produced. In our campaign the basic reward is one copy of the game. However if the campaign succeeds beyond the original goal the base rewards are all made better, like by adding glow in the dark dice or extra components.</p>
                    
                    <p name="textstring" className="crowdfunding_text_2" >So when we decided on the venue for our crowdfunding adventure we decided to go with Gamefound. They specialize in games, are international and trusted. Justin has published a game before using Gamwfound. Gamefound reallizes that amatuers can make great games.</p>
                    <p name="textstring" className="crowdfunding_text_3" >Náttúruval is printed by the same solid company that made Scythe, Wingspan and other elegant games, Panda Game Manufacturing. So the project publishing pipeline is with reputable companies, and if you have any questions or comments you can reach out to us through Gamefound</p>
                </div>
                    </Col>
                </Row>


            </section>
            <div className="leaf-action" style={{ backgroundImage: `url(${leaf})` }}>
                    <a name="textstring" className="call_to_action_button_text_2" href={gamefoundurl}  target='#'>Gamefound!</a>
                </div>
        </div >
    );
}

export default App;