import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import dice from '../../public/dice.png';

const AboutGame = ({ currLang }) => {
    const content = {
        en: {
            title: "About Náttúruval",
            description: "Náttúruval is a fascinating card game that combines entertainment with education. Players learn about over 100 real animals while competing in an engaging battle of statistics.",
            features: [
                {
                    title: "Educational",
                    text: "Based on real scientific data about animals from around the world"
                },
                {
                    title: "Family-Friendly",
                    text: "Perfect for players of all ages to learn and have fun together"
                },
                {
                    title: "Strategic",
                    text: "Choose your battles wisely - different animals excel in different categories"
                },
                {
                    title: "Beautiful Design",
                    text: "Stunning artwork brings each animal to life on the cards"
                }
            ]
        },
        is: {
            title: "Um Náttúruval",
            description: "Náttúruval er heillandi spil sem sameinar skemmtun og nám. Spilarar læra um yfir 100 raunveruleg dýr á meðan þeir keppa í spennandi tölfræðibaráttu.",
            features: [
                {
                    title: "Fræðandi",
                    text: "Byggt á raunverulegum vísindagögnum um dýr frá öllum heimshornum"
                },
                {
                    title: "Fjölskylduvænt",
                    text: "Fullkomið fyrir spilarar á öllum aldri til að læra og skemmta sér saman"
                },
                {
                    title: "Stefnumótandi",
                    text: "Veldu bardagana þína skynsamlega - mismunandi dýr skara framúr í mismunandi flokkum"
                },
                {
                    title: "Falleg hönnun",
                    text: "Stórfengleg listaverk kveikja líf í hvert dýr á spilunum"
                }
            ]
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    return (
        <section className="about-game py-5" id="about">
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
                <Row className="mb-4">
                    <Col lg={12}>
                        <p className="lead text-start">{text.description}</p>
                    </Col>
                </Row>
                <Row>
                    {text.features.map((feature, index) => (
                        <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                            <Card className="h-100 text-center border-0 shadow-sm rounded">
                                <Card.Body>
                                    <Card.Title className="h5 text-success">{feature.title}</Card.Title>
                                    <Card.Text className="text-start">{feature.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default AboutGame;
