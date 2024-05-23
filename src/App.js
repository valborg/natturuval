import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import leaf from '../public/Leaf.svg'
import logoWithTagline from '../public/NattLockupWithTagline.svg'

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
                <img src={logoWithTagline}/>
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
        <img src={logoWithTagline} alt="ITIS THE OLD"/>
        </Col>
        <Col className='col-sm-12 col-md-8 col-lg-7'>
            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
        </Col>

        </Row>
        </div>
        <div className='secondHistory'>
            
        <Row>

        <Col className='col-sm-12 col-md-8 col-lg-7'>
            <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
1914 translation by H. Rackham

"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
        </Col>
        <Col className='col-sm-12 col-md-4 col-lg-5'>
        <img src={leaf} height="300" alt="ITIS THE OLD"/>
        </Col>

        </Row>

        </div>
        

    </section>
    <section className='App-gamefound'>
        <h1>How gamefound works</h1>
        <div className="gamefound">
        <p>1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."em ipsum at it.the story behind it is this, such a lorem ipsum Let. Us. Do. THREE!!!</p>
            </div>
    </section>
</div>
  );
}

export default App;