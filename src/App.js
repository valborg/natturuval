import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Container fluid >
            <Nav className='topnav'
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                        <Nav.Link href="#main">squarelogo/top/home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#team">The team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#history">The story</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='gamefound.com'>
                        Gamefound
                        </Nav.Link>
                    </Nav.Item>
            </Nav>
        </Container>
        <section id="main" className='main'>
      <Container>
        <Row>
            <Col className="col-sm-12 col-md-12 col-lg-6">
                <img src="/assets/NattLockupWithTagline.svg"/>
                <p className="someFont">We are proud to present our game Náttúruval that brings joy, laughter and science to anyone who plays it. 
                The game is being funded via Gamefound and you can make your pledge there to secure a copy for you, yours and even an educational center if you are feeling charitable.</p>
            </Col>
            
            <Col className="col-sm-12 col-md-12 col-lg-6">
                <iframe src="https://player.vimeo.com/video/949243604?h=94a7c4ea97" width="640" height="360" maxwidth="100%" maxheight="50%" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
            </Col>
        </Row>
      </Container>
      </section>
      <section className="App-action">
        <p><Button variant="outline-info">Check it out</Button> This is a limited time crowdfunding project so to get your hands on a copy you have to pledge or get a grown up to do it for you!</p>
      </section>
      <section className="App-about">
        <h1>Meet the team!</h1>
    <CardGroup>
        <Card className="col-sm-12 col-md-6 col-lg-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Boston_terrier_looking_upwards.png" height="100px" className="card-img-top" alt="boston terrier"/>
            <div className="card-body">
                <h5 className="card-title">Justin Richer</h5>
                <p className="card-text">The top dog behind the project and when he's not out walking he's on the trail of securty breaches.</p>
                <Button href="https://bspk.io" className="btn btn-primary">Go safely</Button>
            </div>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hairy_dragonfly_%28Brachytron_pratense%29_male_close_up.jpg"  className="card-img-top" alt="hairy dragonfly"/>
            <div  className="card-body">
            <h5  className="card-title">Kate Estrop</h5>
            <p  className="card-text">This bug has been buzzing around the look and feel of the project, and possibly even smell.</p>
            <Button href="https://kateestrop.com/" className="btn btn-warning">Go bug them</Button>
            </div>
        </Card>
        <Card>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Randwick_bird_of_paradise_001.jpg"  className="card-img-top" alt="is it a bird?"/>
            <div  className="card-body">
            <h5  className="card-title">Valborg Sturludóttir</h5>
            <p  className="card-text">Between fighting dragons and solving sudokus this bird mama tried to catch them all</p>
            <Button className='btn btn-info' href="https://github.com/valborg">Go on a nerdy adventure</Button>
            </div>
        </Card>  
        <Card>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Giant_Anteater_Santa_Barbara_Zoo_1.jpg"  className="card-img-top" alt="ant eater"/>
            <div  className="card-body">
            <h5  className="card-title">Rökkvi Þór</h5>
            <p  className="card-text">This young man's favorite scientist is David Attenborogh, and he can't wait to tell you facts about animals you've never heard of.</p>
            <Button href="" className="btn btn-success">Go on get my game!</Button>
            </div>
        </Card>
    </CardGroup>
    </section>
    <section className='App-history'>
        <h1>The story behind it</h1>
        <div className="firstHistroy">
        <Row>
        <Col className='col-sm-12 col-md-4 col-lg-5' >
        <img src="/assets/NattLockupWithTagline.svg" alt="ITIS THE OLD"/>
        </Col>
        <Col className='col-sm-12 col-md-8 col-lg-7'>
            <p>And the story behind it is this, such a lorem ipsum it was. Very every and there and then wow it was all such an incredible journey i'm sure it'll get sold to the guys over there in Hollywood any time soon. Not looking at my watch or anything but you know, can't be too careful</p>
            <p>Lets make another paragraph to emphasizwea how big of an histoire it is really. </p>
            <p>while we're at it. Let. Us. Do. THREE!!!</p>
        </Col>

        </Row>
        </div>
        <div className='secondHistory'>
            
        <Row>

        <Col className='col-sm-12 col-md-8 col-lg-7'>
            <p>And the story behind it is this, such a lorem ipsum it was. Very every and there and then wow it was all such an incredible journey i'm sure it'll get sold to the guys over there in Hollywood any time soon. Not looking at my watch or anything but you know, can't be too careful</p>
            <p>Lets make another paragraph to emphasizwea how big of an histoire it is really. </p>
            <p>while we're at it. Let. Us. Do. THREE!!!</p>
        </Col>
        <Col className='col-sm-12 col-md-4 col-lg-5'>
        <img src="/assets/NattSquareLockup.png" height="300" alt="ITIS THE OLD"/>
        </Col>

        </Row>

        </div>
        

    </section>
    <section className='App-gamefound'>
        <h1>How gamefound works</h1>
        <div className="gamefound">
        <p>And the story behthe story behind it is this, such a lorem ipsumind it is this, such a lorem ipsum ithe story behind it is this, such a lorem ipsumt was. Very every and there and then wow it was all such an incredible journey i'm sure it'll get sold to the guys over there in Hollywood any time soon. Not looking at my watch or anything but you know, can't be too careful</p>
            <p>Lets make another paragrthe story behind it is this, such a lorem ipsumaph to emphasizwea how bigthe story behind it is this, such a lorem ipsum of an histoire it is really. </p>
            <p>while we'rethe story behind it is this, such a lorem ipsum at it.the story behind it is this, such a lorem ipsum Let. Us. Do. THREE!!!</p>
            </div>
    </section>
</div>
  );
}

export default App;