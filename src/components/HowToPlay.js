import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import dice from '../../public/dice.png';
import coolfiskurinn from '../../public/coolfiskurinn.png';
import coolstar from '../../public/coolstar.png';
import fight from '../../public/fight.png';
import baratta from '../../public/baratta.png';

const HowToPlay = ({ currLang }) => {
    const content = {
        en: {
            title: "How to Play",
            subtitle: "Learn the rules and start playing!",
            basicRules: {
                title: "Basic Rules",
                steps: [
                    "Each player draws one card from the deck",
                    "Choose a category by rolling the dice or selecting manually",
                    "Compare the values for the chosen category",
                    "The player with the highest value wins the round",
                    "Winner takes both cards and continues playing",
                    "Game ends when one player has all the cards or time runs out"
                ]
            },
            categories: {
                title: "Card Categories",
                list: [
                    "Body Length (head to tail)",
                    "Average Lifespan (in wild)",
                    "Number of Offspring",
                    "Number of Legs",
                    "Scientific Name Length"
                ]
            },
            variations: {
                title: "Game Variations",
                modes: [
                    {
                        name: "Classic Mode",
                        description: "Traditional gameplay with dice rolling to select categories"
                    },
                    {
                        name: "Strategic Mode",
                        description: "Players take turns choosing categories for maximum strategy"
                    },
                    {
                        name: "Speed Mode",
                        description: "Quick rounds with time limits for fast-paced fun"
                    },
                    {
                        name: "Educational Mode",
                        description: "Extended play with fact-sharing and discussion"
                    }
                ]
            }
        },
        is: {
            title: "Hvernig á að spila",
            subtitle: "Lærðu reglurnar og byrjaðu að spila!",
            basicRules: {
                title: "Grunnreglur",
                steps: [
                    "Hver spilari dregur eitt spil úr stokknum",
                    "Veldu flokk með því að kasta teningi eða velja handvirkt",
                    "Berðu saman gildin fyrir valinn flokk",
                    "Spilarinn með hæsta gildið vinnur umferðina",
                    "Sigurvegarinn tekur bæði spilin og heldur áfram að spila",
                    "Leik lýkur þegar einn spilari á öll spilin eða tíminn rennur út"
                ]
            },
            categories: {
                title: "Spilaflokkir",
                list: [
                    "Líkamslengd (höfuð til hala)",
                    "Meðallíftími (í náttúrunni)",
                    "Fjöldi afkvæma",
                    "Fjöldi fóta",
                    "Lengd vísindaheitis"
                ]
            },
            variations: {
                title: "Leikafbrigði",
                modes: [
                    {
                        name: "Hefðbundinn hamur",
                        description: "Hefðbundinn leikur með teningakasti til að velja flokka"
                    },
                    {
                        name: "Stefnumótandi hamur",
                        description: "Spilarar skiptast á að velja flokka til hámarksáætlunar"
                    },
                    {
                        name: "Hraðahamur",
                        description: "Skjótar umferðir með tímamörkum fyrir hraða skemmtun"
                    },
                    {
                        name: "Fræðsluhamur",
                        description: "Útvidgaður leikur með staðreyndadeili og umræðum"
                    }
                ]
            }
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];
    const coolfish = lang === 'en' ? coolstar : coolfiskurinn;
    const fightImage = lang === 'en' ? baratta : fight;

    return (
        <section className="how-to-play py-5 bg-light" id="how-to-play">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col xs={12} className="text-center">
                        <div className="section-heading-container d-inline-flex align-items-center">
                            <h2 className="mb-0 text-success border border-success rounded px-3 py-2 d-flex align-items-center">
                                {text.title}
                                <img src={dice} width="24" height="24" alt="dice" className="ms-2" />
                            </h2>
                        </div>
                    </Col>
                </Row>
                <p className="text-center text-muted mb-5">{text.subtitle}</p>

                {/* Battle demonstration section */}
                <Row className=" mb-3">
                    <Col xs={0} lg={3} className="justify-content-center mb-3 mb-lg-0 d-flex">
                        <h5></h5>/
                    </Col>
                    <Col xs={12} lg={3} className="justify-content-center mb-3 mb-lg-0 d-flex">
                        <img src={fightImage} className="img-fluid" style={{ maxWidth: 'auto', maxHeight: '400px' }} alt="animal battle"/>
                    </Col>
                    <Col xs={12} lg={6} className="justify-content-center d-flex flex-column">
                        <h5 className="mb-3" style={{fontSize: '1rem'}}>{lang === 'en' ? 'Here we have an obvious winner in the battle of leg count' : 'Hér sjáum við augljósan sigurvegara í baráttunni um fótafjölda'}</h5>
                        <img src={coolfish} className="img-fluid" style={{maxWidth: '300px'}} alt="cool animal winner"/>  
                    </Col>
                </Row>

                <Row>
                    <Col lg={8} className="mx-auto">
                        <Accordion defaultActiveKey="0" className="mb-5">
                            <Accordion.Item eventKey="0" className="rounded">
                                <Accordion.Header>{text.basicRules.title}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex align-items-start mb-3">
                                        <img src={dice} width="60" height="60" alt="dice" className="me-3 flex-shrink-0" />
                                        <ol className="mb-0 text-start">
                                            {text.basicRules.steps.map((step, index) => (
                                                <li key={index} className="mb-2">{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className="rounded">
                                <Accordion.Header>{text.categories.title}</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled text-start">
                                        {text.categories.list.map((category, index) => (
                                            <li key={index} className="mb-2">
                                                <span className="badge bg-success me-2 rounded">{index + 1}</span>
                                                {category}
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className="rounded">
                                <Accordion.Header>{text.variations.title}</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        {text.variations.modes.map((mode, index) => (
                                            <Col key={index} sm={12} md={6} className="mb-3">
                                                <Card className="border-success h-100 rounded">
                                                    <Card.Body>
                                                        <Card.Title className="h6 text-success">{mode.name}</Card.Title>
                                                        <Card.Text className="small text-start">{mode.description}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HowToPlay;
