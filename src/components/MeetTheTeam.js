import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

import valborg from '../../public/valborgS2.jpeg';
import justin from '../../public/justin.jpeg';
import rokkvi from '../../public/xsR2.jpeg';
import kate from '../../public/katep2.jpeg';
import feetIcon from '../../public/Feet.svg';

const MeetTheTeam = ({ currLang }) => {

    const content = {
        en: {
            title: "Meet the Team",
            valborg_text: "A mother, a programmer, a teacher, a nerd, a lover of nature and a she can quote Mel Brook's Spaceballs at the most opportune moments. This project organically fit to her interest: creativity, games, spending time with her kids and datasets.",
            valborg_button: "Other works",
            justin_text: "Internet security expert by day, and a musician by night. He has published a game about the thrill of Boston traffic, Gridlock. He has also made several editions of Cards Against Identity, expansions to a popular party game. His expertise and interest lie in having fun and cyber security.",
            justin_button: "Trust this link",
            rokkvi_text: "A young man who can't wait to tell you facts about animals, and likely one you've not heard of. He is ten years old and was seven when he first had the idea of these animal cards. His main interests are animals and badminton.",
            rokkvi_button: "Support me",
            kate_text: "An artist from Boston who has been doing all sorts of work, from teaching to freelance graphic design. This is the first game that they have worked on from the start. Because Kate is a specialist at drawing animals, and especially insects, this project intrigued them. Their Mola mola got a big role in the campaign as soon as it was sketched into being.",
            kate_button: "Go bug them",
        },
        is: {
            title: "Teymið á bakvið spilið",
            valborg_text: "Móðir, forritari, kennari, nörd, og nátturuunnandi sem getur vísað í Spaceballs eftir Mel Brooks á hárréttum tíma. Þetta verkefni féll að hennar helstu áhugamálum; sköpun, leikjum, gæðastundum með börnunum og gagnasöfnum.",
            valborg_button: "Fyrri verk",
            justin_text: "Hugbúnaðaröryggissérfræðingur á daginn og tónlistarmaður á kvöldin. Hann gaf út spilið Gridlocked sem snýst um umferðina í Boston og glundroðann sem henni fylgir. Hann hefur líka gert nokkrar viðbætur við vinsælt spil sem heita Cards Against Identity. Áhugamál hans eru að hafa gaman og tölvuöryggi.",
            justin_button: "Treystu hlekknum",
            rokkvi_text: "Ungur maður sem getur ekki beðið eftir því að segja þér staðreyndir um dýr, líklega dýr sem þú hefur ekki heyrt um. Hann er tíu ára gamall og var 7 ára þegar hann kom þessu öllu af stað. Helstu áhugamálin eru dýrafræði, stærðfræði, listir og badminton.",
            rokkvi_button: "Styðja mig",
            kate_text: "Listamaður frá Boston sem hefur verið í allskonar hönnunarvinnu, frá kennslu til verktakavinnu. Þetta er fyrsta spilið sem hán tekur að sér. Kate er nefnilega sérfræðingur í að teikna dýr og þá sérstaklega skordýr, því heillaði þetta verkefni. Tunglfiskurinn háns fékk stórt hlutverk í markaðsherferðinni um leið og hann var kominn af teikniborðinu.",
            kate_button: "Límmiðar!",
        }
    }

    const lang = currLang || 'is';
    const text = content[lang];

    return (
        <section className="App-about py-5" id="team">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} className="text-center">
                        <div className="section-heading-container d-inline-flex align-items-center">
                            <h2 className="mb-0 text-success border border-success rounded px-3 py-2 meet_the_team d-flex align-items-center">
                                {text.title}
                                <img src={feetIcon} width="24" height="24" alt="feet" className="me-2" />
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                        <Card className='h-100 m-0 shadow-sm rounded'>
                            <CardImg src={valborg} className="card-img-top rounded-top" style={{ height: '250px', objectFit: 'cover' }} alt="picture of a smiling Valborg by a sowing machine" />
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Valborg Sturludóttir</CardTitle>
                                <CardText className="valborg_text flex-grow-1 text-start">{text.valborg_text}</CardText>
                                <Button variant="outline-success" className='btn valborg_button mt-auto rounded' href="https://github.com/valborg">{text.valborg_button}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                        <Card className='h-100 m-0 shadow-sm rounded'>
                            <CardImg src={justin} className="card-img-top rounded-top" style={{ height: '250px', objectFit: 'cover' }} alt="Justin smiling professionally straight into the camera" />
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Justin Richer</CardTitle>
                                <CardText className="justin_text flex-grow-1 text-start">{text.justin_text}</CardText>
                                <Button href="https://bspk.io" variant="outline-success" className="btn justin_button mt-auto rounded" >{text.justin_button}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                        <Card className='h-100 m-0 shadow-sm rounded'>
                            <CardImg src={rokkvi} className="card-img-top rounded-top" style={{ height: '250px', objectFit: 'cover' }} alt="Rökkvi Þór apprehensive about formal dresswear" />
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Rökkvi Þór</CardTitle>
                                <CardText className="rokkvi_text flex-grow-1 text-start">{text.rokkvi_text}</CardText>
                                <Button href="" variant="outline-success" className="btn rokkvi_button mt-auto rounded" >{text.rokkvi_button}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} xl={3} className="p-3">
                        <Card className='h-100 m-0 shadow-sm rounded'>
                            <CardImg src={kate} className="card-img-top rounded-top" style={{ height: '250px', objectFit: 'cover' }} alt="Kate really impressed either by their ability to attract bugs or the bug itself" />
                            <CardBody className="d-flex flex-column">
                                <CardTitle>Kate Estrop</CardTitle>
                                <CardText className="kate_text flex-grow-1 text-start">{text.kate_text}</CardText>
                                <Button href="https://kateestrop.com/" variant="outline-success" className="btn kate_button mt-auto rounded">{text.kate_button}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MeetTheTeam;
