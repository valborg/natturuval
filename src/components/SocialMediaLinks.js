import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InstagramIcon from '../../public/instagram.svg';
import TiktokIcon from '../../public/tiktok.svg';
import TumblrIcon from '../../public/tumblr.svg';

const SocialMediaLinks = ({ currLang }) => {

    const lang = currLang || 'is';
    //const text = content[lang];
    let instasocial = 'https://www.instagram.com/natturuval/'
    let tumblrsocial = 'https://www.tumblr.com/blog/natturuval'
    let tiktoksocial = 'https://www.tiktok.com/@natturuval'
    let facebooksocial = currLang === 'is' ? 'https://www.facebook.com/people/N%C3%A1tt%C3%BAruval/61566334469444/' : ''

    return (
        <section id="social-media" className='socials'>
        <Container>
            {/* Social Media - Mobile Optimized */}
            <Row>
                <Col xs={12} className="px-3">
                    <div className='social-media d-flex flex-column align-items-center justify-content-center mt-4'>
                        <div className="d-flex align-items-center justify-content-center mb-2 w-100">
                            {/* <h4 className="social_media mb-0 text-center" name="textstring" style={{
                                fontSize: '1.1rem',
                                fontWeight: '500'
                                }}></h4> */}
                                <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                                    <div className="social-media-icon" onClick={() => window.open(instasocial)}>
                                        <img src={InstagramIcon} width="40" height="40" alt="instagram social icon" />
                                    </div>
                                    <div className="social-media-icon" onClick={() => window.open(tiktoksocial)}>
                                        <img src={TiktokIcon} width="40" height="40" alt="tiktok social icon" />
                                    </div>
                                    <div className="social-media-icon" onClick={() => window.open(tumblrsocial)}>
                                        <img src={TumblrIcon} width="40" height="40" alt="tumblr social icon" />
                                    </div>
                                    {/* Facebook placeholder */}
                                    {facebooksocial && <div className="social-media-icon" onClick={() => window.open(facebooksocial)}>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg' width="40" height="40" alt="facebook social icon" />
                                    </div>}
                                </div>
                                {/* Arrow pointing to social icons - desktop only */}
                                {/* <span className="d-none d-lg-inline mx-auto" style={{
                                    fontSize: '2rem',
                                    color: '#198754',
                                    transform: 'scaleX(-1)',
                                    display: 'inline-block'
                                }}>➜</span> */}
                            </div>
                        </div>
                    </Col>
                </Row>
                </Container>
        </section>
    );
};

export default SocialMediaLinks;