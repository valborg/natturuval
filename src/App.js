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
import front from '../public/front.svg'
import back from '../public/back.svg'
import fantasy from '../public/fantasy.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Fan from './components/Fan';

import textstringData from './strings.json'
console.log(textstringData)

let CURR_LANG = "en"

function changeLanguages() {
    CURR_LANG = CURR_LANG === 'en' ? 'is' : 'en'
    const collection = document.getElementsByName("textstring")
    for(const item of collection){
        const identifier = item.className.split(' ').find(word => word.includes('_')||'')
        const replacement = textstringData[0][CURR_LANG][identifier]
        document.getElementsByClassName(identifier)[0].innerHTML = replacement
    }
}


const App = () => {
  return (
    <div className="App">
        {/* <Container fluid > */}
            
        <Navbar bg="light" expand="lg" className='topnav'>
            <Nav  activeKey="/home">
                <img src={leaf} width="40px" height="auto" alt="leaf"/>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Item>
                        <Nav.Link href="#demo" name="textstring" className="nav_demo">Demo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#team" name="textstring" className="nav_team">The team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#history" name="textstring" className="nav_history">The story</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href={textstringData[0]['en'].gamefoundurl}>
                        Gamefound
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
        <Row className='row align-items-center'>
            <Col className="col-sm-12 col-md-12 col-lg-6">
                <img src={logoWithTagline} width="100%" height="auto" alt="logo"/>
                <p className="someFont main_subtext" name="textstring" >We are proud to present our game Náttúruval that brings joy, laughter and science to anyone who plays it. 
                The game is being funded via Gamefound and you can make your pledge there to secure a copy for you, yours and even an educational center if you are feeling charitable.</p>
            </Col>
            
            <Col className="col-sm-12 col-md-12 col-lg-6">
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe  className='embed-responsive-item' src="https://player.vimeo.com/video/949243604?h=94a7c4ea97"  height="180" width="320"  frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Col>
        </Row>
      </Container>
      </section>
      <section className="App-action">
      <Row>
        <Col>
        <Button target="_blank" href={textstringData[0]['en'].gamefoundurl} variant="outline-info"  name="textstring" className="call_to_action_button" >Check it out</Button>
        </Col>
        <Col>
            <p  name="textstring" className="call_to_action" >This is a limited time crowdfunding project so to get your hands on a copy you have to pledge or get a grown up to do it for you!</p>
        </Col>
        </Row>
      </section>
      <section>
        <div className="game-components demo" >
            {/* <Fan></Fan> */}
            <h1 name="textstring" className="demo_title">Game cards</h1>
            <Row  >
                <Col className="col-sm-12 col-md-12 col-lg-4 d-flex">
                    <Row className="flex-fill">
                        <img src={front} alt="front og the card"/>
                        <div>
                            <p name="textstring" className="demo_front" >The front of the basic card</p>
                        </div>
                        </Row>
                </Col>
                <Col className="col-sm-12 col-md-12 col-lg-4 d-flex">
                <Row className="flex-fill">
                        <img src={back} alt="back of the card"/>
                        <div>
                        <p name="textstring" className="demo_back" >The back of each card, all cards including add ons</p>
                        </div>
                        </Row>
                </Col>
                <Col className="col-sm-12 col-md-12 col-lg-4 d-flex">
                    <Row className="flex-fill" >
                        <img src={fantasy}  alt="template for the fantasy card"/>
                        <div>
                        <p name="textstring" className="demo_fantasy" >A blank fantasy card were your design might become a real card</p>

                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
      </section>
      <section className="App-about" id="team">
        <h1 name="textstring" className="meet_the_team">Meet the team!</h1>
    <Row className='card-group'>
        <Col className="col-sm-12 col-md-6 col-lg-3 d-flex">
        <Card className="flex-fill">               
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Boston_terrier_looking_upwards.png" width="100%" height="auto" className="card-img-top" alt="boston terrier"/>
            <div className="card-body">
                <h5 className="card-title">Justin Richer</h5>
                <p className="card-text justin_text" name="textstring">The top dog behind the project and when he's not out walking he's on the trail of securty breaches.</p>
                <Button href="https://bspk.io" className="btn btn-primary justin_button" name="textstring">Go safely</Button>
            </div>
            </Card>
        </Col>
        <Col className="col-sm-12 col-md-6 col-lg-3 d-flex">
            <Card className="flex-fill">               
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hairy_dragonfly_%28Brachytron_pratense%29_male_close_up.jpg"  width="100%" height="auto" className="card-img-top" alt="hairy dragonfly"/>
            <div  className="card-body">
            <h5  className="card-title">Kate Estrop</h5>
            <p  className="card-text kate_text" name="textstring">This bug has been buzzing around the look and feel of the project, and possibly even smell.</p>
            <Button href="https://kateestrop.com/" className="btn btn-warning kate_button" name="textstring">Go bug them</Button>
            </div>
            </Card>
        </Col>
        <Col className="col-sm-12 col-md-6 col-lg-3 d-flex">
        <Card className="flex-fill">               
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Randwick_bird_of_paradise_001.jpg" width="100%" height="auto" className="card-img-top" alt="is it a bird?"/>
            <div  className="card-body">
            <h5  className="card-title">Valborg Sturludóttir</h5>
            <p  className="card-text  valborg_text" name="textstring">Between fighting dragons and solving sudokus this bird mama tried to catch them all</p>
            <Button className='btn btn-info valborg_button' href="https://github.com/valborg" name="textstring">Go on a nerdy adventure</Button>
            </div>
            </Card>
        </Col>
        <Col className="col-sm-12 col-md-6 col-lg-3 d-flex">
        <Card className="flex-fill">               
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Giant_Anteater_Santa_Barbara_Zoo_1.jpg"  width="100%" height="auto" className="card-img-top" alt="ant eater"/>
            <div  className="card-body">
            <h5  className="card-title">Rökkvi Þór</h5>
            <p  className="card-text rokkvi_text" name="textstring">This young man's favorite scientist is David Attenborogh, and he can't wait to tell you facts about animals you've never heard of.</p>
            <Button href="" className="btn btn-success rokkvi_button" name="textstring" >Go get my game!</Button>
            </div>
            </Card>
        </Col>
    </Row>
    </section>
    <section className='App-history' id="history">
        <h1 name="textstring" className="history_title">The story behind the game</h1>
        <div className="firstHistroy">
        <Row>
        <Col className='col-sm-12 col-md-4 col-lg-5' >
        <img src="/assets/NattLockupWithTagline.svg" width="100%" height="auto" alt="old-card-1.0"/>

        </Col>
        <Col className='col-sm-12 col-md-8 col-lg-7'>
            <p name="textstring" className="history_part_1">Rökkvi Þór, who's favorite scientist is Sir David Frederick Attenborough, asked his mother one day to create "little cards" with information about animals. Valborg, his mother, started right away making a dataset of the suggested animals. Then the dataset needed some uniformity and a discussion started between the two about what sort of statistics are universal enough to be able to quantify over most animals? Speed, how long they sleep, number of eyes, average distance traveled, were all mentioned at one point or another during the process but ultimately discarded, well the number of eyes is easily quantifiable but not very diverse. The statistics that did end up on the card were weight of an adult, length (from head to toe) of an adult, how many offspring and adult produces in one bout, average lifetime in the wild of an adult, number of feet of a healthy adult (the average would always be lower than that, like the average number of hands on people is less than two). Now here are 5 numbers that can be checked in nature and there wasn't any other category they could think of that would fit the criteria of universallly available of most animals. So they started making the cards, mind you they were more like spreadsheet printouts than game cards, and they realized that if they could add one more category they would be able to use a dice and make a game of the, essentially, flashcards. So they made a program count the numbers in the scientific name and that became a stat. After the dice was brought in there was no going back, Valborg made a program that churnes out printables for cards that fit 9 on an A4 for all 13 animals from the dataset, which then grew but small number of cards didn't stop us from playing the game profusively. Anytime they added animals to the deck they always added nine at a time to make use of the paper (why 13 then you ask? Mistakes.). This deck is therefore ever expanding and they have been playing and one time Justin came over with his wife and played a few rounds.</p>
        </Col>

        </Row>
        </div>
        <div className='secondHistory'>
            
        <Row>

        <Col className='col-sm-12 col-md-8 col-lg-7'>
            <p name="textstring" className="history_part_2">Justin could see potential in the game already, but had doubts about Valborg's inkscape graphic design. He was already a publisher of a few other games and knew what he was getting himself into. He got in touch with one of his previous contacts in the printing buisness and got them to do a prototype of the game, one for him in English and one for Valborg and Rökkvi in Icelandic, but with a much better design, better size and better paper. When the game arrived the news was that each box would need to retail at about 50$ for it to be viable, which was the end of that. But wait, there is more. Justin didn't just give up like that, he contacted other sources and got quotes and there was a chance for this happening and for as little as 20$ and that was a number they could work with. Justin had done an amazing job at redesigning the cards but thought it would be best to bring in a professional. Kate Estrop was that professional, they are a designer that specializes in animal, and more specifically bug, illustrations and they were excited to be on this team, and dare we say made even Justin's fancy card design look like yesterday's news</p>
        </Col>
        <Col className='col-sm-12 col-md-4 col-lg-5'>
        <img src="/assets/NattSquareLockup.png" width="100%" height="auto" alt="old-card-2.0"/>
        </Col>
        </Row>

        </div>
        

    </section>
    <section className='App-gamefound'>
        <h1 name="textstring" className="crowdfunding_title">How crowdfunding works</h1>
        <div className="gamefound">
            <Row>
            <Col className='col-sm-12 col-md-2 col-lg-4'>
            <img src="/assets/NattSquareLockup.png" width="100%" height="auto" alt="krepskplyak"/>
            
            </Col>
            <Col className='col-sm-12 col-md-10 col-lg-8'>
            <p name="textstring" className="crowdfunding_text_1" >Gamefound is a crowdfunding platform. Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet. In short, it is a way to make small independent ventures possible because the need for capital in the beginning of the project is not necessary. So this is not an online store, this is a way for you pay for a game that we then promise to make as long as enough people do that, if the project does not gain enough traction and you have already spent money on it and it does not get printed you will get your money back.</p>

<p>There are more things to buy from the site as well like stickers, posters and t-shirts, there is a fantasy creature deck and you could pledge to not only get that extra deck, that is compatable with the regular game, but also have your design in there, like Rökkvi made Krepskplyak the not crab.</p>
<p>
Gamefound is all about making game creation faster and simpler. A platform that brings together supporters and game developers, not just for board games, but for all kinds of gaming projects.
Here, creators can concentrate on what they do best, while backers can easily find and support the games they love. 
They offer a range of services, including crowdfunding, pledge management for any campaign, and marketing support, all in one hassle-free place.</p>
            
            </Col>

            </Row>
            </div>

    </section>
</div>
  );
}

export default App;