import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const logoWithTaglineEng = '/images/NattLockupWithTagline.svg';
const logoWithTaglineIce = '/images/NattLockupWithTagline_is.svg';
const instagram = '/images/instagram.svg';
const tiktok = '/images/tiktok.svg';
const tumblr = '/images/tumblr.svg';
// Placeholder for Facebook icon - add facebook.svg to public folder
// const facebook = '/facebook.svg';


const HeroSection = ({ currLang }) => {
    let instasocial = 'https://www.instagram.com/natturuval/'
    let tumblrsocial = 'https://www.tumblr.com/blog/natturuval'
    let tiktoksocial = 'https://www.tiktok.com/@natturuval'
    let facebooksocial = currLang === 'is' ? 'https://www.facebook.com/people/N%C3%A1tt%C3%BAruval/61566334469444/' : ''
    let gamefoundurl = "https://gamefound.com/en/projects/bespoke-games/natturuval"

    const logoImage = currLang === 'is' ? logoWithTaglineIce : logoWithTaglineEng;
    return (
        <section id="home" className='App-main'>
            <Container className="px-3">
                <Row>
                    <Col xs={12} className="text-center">
                        <div className="mb-3 mb-md-4">
                            <img
                                src={logoImage}
                                className="img-fluid logo-image"
                                alt="logo"
                            />
                        </div>
                    </Col>
                </Row>

                {/* Social Media - Mobile Optimized */}
                <Row>
                    <Col xs={12} className="px-3">
                        <div className='social-media d-flex flex-column align-items-center justify-content-center mt-4'>
                            {/* Responsive layout: Stack at lg breakpoint instead of md */}
                            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mb-2 w-100" style={{ gap: '2rem' }}>
                                <h4 className="social_media mb-0 text-center order-1 order-lg-1" name="textstring" style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '500'
                                }}></h4>
                                <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 order-2 order-lg-2">
                                    <div className="social-media-icon" onClick={() => window.open(instasocial)}>
                                        <img src={instagram} width="40" height="40" alt="instagram social icon" />
                                    </div>
                                    <div className="social-media-icon" onClick={() => window.open(tiktoksocial)}>
                                        <img src={tiktok} width="40" height="40" alt="tiktok social icon" />
                                    </div>
                                    <div className="social-media-icon" onClick={() => window.open(tumblrsocial)}>
                                        <img src={tumblr} width="40" height="40" alt="tumblr social icon" />
                                    </div>
                                    {/* Facebook placeholder */}
                                    {facebooksocial && <div className="social-media-icon" onClick={() => window.open(facebooksocial)}>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg' width="40" height="40" alt="facebook social icon" />
                                    </div>
                                    }
                                </div>
                                <Button
                                    variant="outline-success"
                                    onClick={() => window.open(gamefoundurl)}
                                    className="rounded btn d-block mx-auto mx-lg-0 order-3 order-lg-3 hero-cta-button"
                                >
                                    {/* Show full text when in row layout (lg+), short text when stacked */}
                                    <span name="textstring" className="call_to_action_button_text_1 d-none d-lg-inline"></span>
                                    <span name="textstring" className="call_to_action_button_text_1_short d-inline d-lg-none"></span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
