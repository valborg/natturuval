import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
import pattern from '../public/multiColorPattern.png'
import back from '../public/back.svg'
import version1 from '../public/oldcardsWithHand.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Fan from './components/Fan';

import textstringData from './strings.json'
import { CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
console.log(textstringData)

let CURR_LANG = "en"

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
                            <Nav.Link target="_blank" name="textstring" className="nav_gamefound" href={textstringData[0]['en'].gamefoundurl}>
                                Visit Gamefound
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {/* U+1F1EC U+1F1E7	&#127468 &#127463 English flag
                        U+1F1EE U+1F1F8	&#127470 &#127480 Icelandic flag */}
                            <Nav.Link onClick={changeLanguages} className="nav_flag" name="textstring" >🇬🇧</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </Container> */}
            <section id="main" className='App-main'>
                <Container>
                    <img src={logoWithTagline} width="100%" height="auto" alt="logo" />
                    <p className="someFont main_subtext" name="textstring" >We are proud to present our game Náttúruval that brings joy, laughter and science to anyone who plays it.
                        The game is being funded via Gamefound and you can make your pledge there to secure a copy for you, yours and even an educational center if you are feeling charitable.</p>
                </Container>
                <div className="App-action">
                </div >
                <div className="leaf-action" style={{ backgroundImage: `url(${leaf})` }}>
                    <a name="textstring" className="call_to_action_button_text_1" href={textstringData[0]['en'].gamefoundurl} >Check it out!</a>
                </div>
            </section>
            <section className="App-about" id="team">
                <h1 name="textstring" className="meet_the_team">Meet the team!</h1>
                <CardGroup className="flex-fill"> 
                    <Card>
                        <CardImg src={valborg} width="100%" height="auto" className="card-img-top" alt="picture of a smiling Valborg by a sowing machine"></CardImg>
                        <CardBody className="d-flex flex-column">
                            <CardTitle>Valborg Sturludóttir
                            </CardTitle>
                            <CardText className="valborg_text" name="textstring">Between fighting dragons and solving sudokus this bird mama tried to catch them all. This is the loadest person who will never ever ever stop talking no matter what and then you will just know if shes in the vincinity because of the shrill laughter
                            </CardText>
                            <Button variant="outline-success" className='btn valborg_button mt-auto' href="https://github.com/valborg" name="textstring">Go on a nerdy adventure</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg src={justin} width="100%" height="auto" className="card-img-top" alt="Justin smiling professionally straight into the camera" ></CardImg>
                        <CardBody className="d-flex flex-column">
                            <CardTitle>Justin Richer</CardTitle>
                            <CardText className="justin_text" name="textstring">The top dog behind the project and when he's not out walking he's on the trail of securty breaches. He comes from a place down by the lake and he makes stuff crust pizas when he's not at all afraid of a few sentences about him online because and this is key he's never heard of greinamerki
                                </CardText>
                                <Button href="https://bspk.io" variant="outline-success" className="btn justin_button mt-auto" name="textstring">Go safely</Button>
                        </CardBody >
                    </Card>
                    <Card>
                        <CardImg src={rokkvi} width="100%" height="auto" className="card-img-top" alt="Rökkvi Þór apprehensive about formal dresswear"></CardImg>
                        <CardBody className="d-flex flex-column">
                        <CardTitle>Rökkvi Þór</CardTitle>
                        <CardText className="rokkvi_text" name="textstring">This young man's favorite scientist is David Attenborogh, and he can't wait to tell you facts about animals you've never heard of.
                        </CardText>
                                    <Button href="" variant="outline-success" className="btn rokkvi_button mt-auto" name="textstring" >Go get my game!</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg src={kate} width="100%" height="auto" className="card-img-top" alt="Kate really impressed either by their ability to attract bugs or the bug itself"></CardImg>
                        <CardBody className="d-flex flex-column">
                        <CardTitle>Kate Estrop</CardTitle>
                        <CardText className="kate_text" name="textstring">This bug has been buzzing around the look and feel of the project, and possibly even smell. Same goes here we know this there is a text and a subtext and then some undertones even and motivs and leitmotivs and what we're saying is kate would love to do a musical about bugs 
                        </CardText>
                                <Button href="https://kateestrop.com/" variant="outline-success" className="btn kate_button mt-auto" name="textstring">Go bug them</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </section>
            <section className='App-history' id="history">
                <h1 name="textstring" className="history_title">The story behind the game</h1>
                <div className="firstHistory">
                    <Row className="d-flex justify-content-center">
                        <Col className='col-sm-12 col-md-12 col-lg-4'>
                            <img src={basicLayout} width="100%" height="auto" alt="old-card-1.0" />
                        </Col>
                        <Col className='col-sm-12 col-md-12 col-lg-5'>
                            <p name="textstring" className="history_origin">Rökkvi Þór, who's favorite scientist is Sir David Frederick Attenborough, asked his mother one day to create \"little cards\" with information about animals. Valborg, his mother, started collecting data about the animals he wanted to learn about. Mind you this kid at age five in a game of twenty questions thought about the Atlantic fur seal. The datapoints were to be numerical, like length, wingspan, weight, average amount of sleep, distance traveled, speed, amount of eyes and other things that were measurable. But the stats needed to be collectable for all animals so many of those categories were unrealistic ( or uninteresting like the unchanging amount of eyes).</p>
                        </Col>
                    </Row>
                    <Row className="d-flex">
                        <Col className=' d-flex'>
                            <img src={grass} width="100%" height="1%" alt="old-card-2.0" />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className='col-sm-12 col-md-12 col-lg-5'>
                        <p name="textstring" className="history_decisions">
                        The categories that were chosen were the length of an adult head to toe, average amount of offspring at a time, and average lifespan in nature. Subsequently two easily aquired categories were introduced. Both because then you could roll a six sided die to randomly select a category and because a 4 sided die did not exist in the home at that point. Those were the amount of legs the creature has (of a healthy adult, the average amount would always be lower) and how many symbols in its scientific name. At that point they started printing out cards with pictures with CC licences and started playing. They didn't have more than 13 cards when they multiple ways playing. Then slowly they added more cards, 9 at a time to fill one a4 sheet of paper.
                            </p>
                        </Col>
                        <Col className='col-sm-12 col-md-12 col-lg-4'>
                            <img src={version1} width="100%" height="1%" alt="old-card-2.0" />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className=' d-flex'>
                            <img src={grass} width="100%" height="1%" alt="old-card-2.0" />
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center'>
                        <Col className='col-sm-12 col-md-12 col-lg-5'>
                            <p name="textstring" className="history_version_1">
                            One day Justin and his wife came over for a visit and Rökkvi showed them the game. Justin thought it had a lot of potential inspite the raw inkscape design. So when he went back home to Boston he decided to improve on the design thouroughly and print a prototype in English and Icelandic. He sent a copy to the duo in Iceland. However the prototype with that printer wasn't really a viable option because the retail value would have to be around 50USD and that dream was crushed essentially. Justin didn't give up so easily and contacted another trusted printer which gave us the ability to retail the game at only 20USD. That's when he said that even his excellent prototype wasn't enough for a commercial product and that they should consult a professional. That is how Kate got involved and elevated the project to great hights.</p>
                        </Col>
                        <Col className='col-sm-12 col-md-12 col-lg-4'>
                            <img src={prototypeArt} width="100%" height="auto" alt="old-card-2.0" />
                        </Col>
                    </Row>
                </div>
                {/* <div className="logoFiller">
                    <img src={grass} height="auto" width="100%" alt="logo" />
                </div> */}
                <div className='secondHistory'>
                    <Row className="d-flex justify-content-center">
                        <Col className='col-sm-12 col-md-12 col-lg-2 d-flex'>
                            <img src={prototypeComparison} width="100%" height="auto" alt="old-card-2.0" />
                        </Col>
                        <Col className='col-sm-12 col-md-12 col-lg-7 d-flex'>
                            <p name="textstring" className="history_part_2">Justin could see potential in the game already, but had doubts about Valborg's inkscape graphic design. He was already a publisher of a few other games and knew what he was getting himself into. He got in touch with one of his previous contacts in the printing buisness and got them to do a prototype of the game, one for him in English and one for Valborg and Rökkvi in Icelandic, but with a much better design, better size and better paper. When the game arrived the news was that each box would need to retail at about 50$ for it to be viable, which was the end of that. But wait, there is more. Justin didn't just give up like that, he contacted other sources and got quotes and there was a chance for this happening and for as little as 20$ and that was a number they could work with. Justin had done an amazing job at redesigning the cards but thought it would be best to bring in a professional. Kate Estrop was that professional, they are a designer that specializes in animal, and more specifically bug, illustrations and they were excited to be on this team, and dare we say made even Justin's fancy card design look like yesterday's news. 
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='App-gamefound' id="crowdfunding">
                <h1 name="textstring" className="crowdfunding_title">How crowdfunding works</h1>
                <div className="gamefound">
                    <Row className='justify-content-center'>
                        <Col className='col-sm-12 col-md-12 col-lg-4 d-flex'>
                            <img src={socials} width="100%" height="auto" alt="gamefound reward" />
                        </Col>
                        <Col className='col-sm-12 col-md-12 col-lg-5 d-flex'>
                            <p name="textstring" className="crowdfunding_text_1" >Hópfjármögnun gefur áhugafólki kost á að fara úti í gjörninga sem venjulega krefjast töluverðs fjármagns í upphafi. Svo í staðinn fyrir að búa til vöru og framleiða, til dæmis gefa út bók eða geisladisk, þá getur fólk sett verkefnið inn í hópfjármögnun og gefið fólki kost á að heita á verkefnið með ákveðnu fjármagni sem gefur þeim ákveðin verðlaun, sem gæti þá verið spilið eða fleiri eintök og eitthvað sem fæst ekki annarsstaðar. Með þessu móti getur fólk lofað að kaupa vöruna ef hún kemst þá í útgáfu, ef hún gerir það ekki þá fellur áheitið um sig sjáft. Svo ef þú hefur mikinn áhuga á því sem þú hefur heitt á þá segirðu sem flestum frá því. Þau verkefnið sem hafa náð ákveðinni lágmarksfjármögnun er enn hægt að heita á, því með auknu fjármagni er hægt að gera útgáfuna betri. Til að mynda mun grunnumbun í þessari fjármögnun vera spilið sjálft og öll þau sem hafa kosið sér þá umbun munu fá hana þegar markmiðinu er náð. Ef fjármögnunin fer fram úr þeim lágmarkskröfum sem settar voru þá er hægt að bæta við umbunina hjá öllum þeim sem höfðu þegar heitið á, og fyrsta sem við settum þar á lista voru teningar sem lýsa í myrkri og svo þar fram eftir götum."</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col className='col-sm-12 col-md-12 col-lg-9 d-flex'>
                            <p name="textstring" className="crowdfunding_text_2" >Þannig að þegar kom að því að velja vettvang fyrir hópfjármögnunina varð gamefound fyrir valinu. Þau sérhæfa sig í spilum og leikjum, eru alþjóðleg og traust. Justin hefur reynslu af því að setja verkefni í hópfjármögnun og hefur gefið út önnur spil sem fóru þá leið. Gamefound er fyrirtæki sem gerir sér grein fyrir því að áhugafólk getur gert ótrúlega mögnuð spil, og spilatengd verkefni.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col className='col-sm-12 col-md-12 col-lg-9 d-flex'>
                            <p name="textstring" className="crowdfunding_text_3" >Prentarinn sem við erum búin að gera samning við hefur áður unnið með verkefni sem fóru í gegnum hópfjármögnun, Panda Game Manufacturing. Þau gerðu meðal annars Scythe og Wingspan og önnur glæsileg spil. Náttúruval er því í einkar góðum höndum og ef það eru einhverjar spurningar um ferlið er hægt að ná í okkur á Gamefound síðunni.</p>
                        </Col>
                    </Row>
                </div>
            </section>
            <div className="leaf-action" style={{ backgroundImage: `url(${leaf})` }}>
                    <a name="textstring" className="call_to_action_button_text_2" href={textstringData[0]['en'].gamefoundurl} >Check it out!</a>
                </div>
        </div >
    );
}

export default App;