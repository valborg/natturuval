import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NattLockupWithTagline from '../../public/NattLockupWithTagline.svg';
import NattLockupWithTagline_is from '../../public/NattLockupWithTagline_is.svg';
import spilogkassi_isl from '../../public/spilogkassi_isl.png';

const logoWithTaglineEng = NattLockupWithTagline;
//const logoWithTaglineIce = NattLockupWithTagline_is;


const HeroSection = ({ currLang }) => {

    //let whereToBuyUrl = currLang === 'is' ? "https://www.karolinafund.com/project/view/6296" : "https://gamefound.com/en/projects/bespoke-games/natturuval";

    const logoImage = currLang === 'is' ? spilogkassi_isl : logoWithTaglineEng;
    return (
        <section id="home" className='App-main'>
            <Container className="px-3">
                <Row>
                    <Col xs={12} className="text-center">
                        <div className="hero-logo-container">
                            <img
                                src={logoImage}
                                className="img-fluid logo-image"
                                alt="logo"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
