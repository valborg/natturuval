import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import dice from '../../public/dice.png';

const WhereToBuy = ({ currLang }) => {
    const content = {
        en: {
            title: "Where to Buy",
            subtitle: "Get your copy of Náttúruval",
            crowdfunding: {
                title: "Crowdfunding Campaign",
                description: "Currently available through our Gamefound crowdfunding campaign. Support us to bring this educational game to life!",
                price: "$20 USD",
                includes: "Includes full card deck, custom dice, and rulebook in English and Icelandic",
                buttonText: "Support on Gamefound",
                availability: "Campaign active until fully funded"
            },
            retailInfo: {
                title: "Future Retail",
                description: "After successful crowdfunding, the game will be available through select retailers and our online store.",
                notifyText: "Sign up to be notified when retail sales begin",
                buttonText: "Join Waiting List"
            },
            shipping: {
                title: "Shipping Information",
                details: [
                    "Worldwide shipping available",
                    "Estimated delivery: 3-6 months after campaign ends",
                    "Free shipping on orders over $50",
                    "Multiple language versions available"
                ]
            }
        },
        is: {
            title: "Hvar á að kaupa",
            subtitle: "Fáðu þitt eintak af Náttúruvali",
            crowdfunding: {
                title: "Hópfjármögnunarherferð",
                description: "Núna fáanlegt í gegnum Gamefound hópfjármögnunarherferðina okkar. Styrktu okkur til að koma þessu fræðandi spili á markað!",
                price: "$20 USD (um 2800 kr)",
                includes: "Inniheldur fullan spilastokk, sérhönnuð teningur og regluhandbók á ensku og íslensku",
                buttonText: "Styrkja á Gamefound",
                availability: "Herferð virk þar til fullfjármögnuð"
            },
            retailInfo: {
                title: "Framtíðarsala",
                description: "Eftir vel heppnaða hópfjármögnun verður spilið fáanlegt hjá völdum smásölum og í vefverslun okkar.",
                notifyText: "Skráðu þig til að fá tilkynningu þegar smásala hefst",
                buttonText: "Skrá á biðlista"
            },
            shipping: {
                title: "Sendingarupplýsingar",
                details: [
                    "Sending um allan heim möguleg",
                    "Áætlaður afhendingartími: 3-6 mánuðir eftir lok herferðar",
                    "Ókeypis sending á pöntunum yfir $50",
                    "Margar tungumálaútgáfur fáanlegar"
                ]
            }
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];
    const gamefoundurl = "https://gamefound.com/en/projects/bespoke-games/natturuval";

    return (
        <section className="where-to-buy py-5" id="where-to-buy">
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
                <p className="text-start text-muted mb-5">{text.subtitle}</p>

                <Row>
                    <Col lg={8} className="mx-auto">
                        <Card className="border-success mb-4 shadow rounded">
                            <Card.Header className="bg-success text-white rounded-top">
                                <h4 className="mb-0">{text.crowdfunding.title}</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={8}>
                                        <p className="text-start">{text.crowdfunding.description}</p>
                                        <p className="mb-2 text-start"><strong>{text.crowdfunding.includes}</strong></p>
                                        <p className="text-muted small text-start">{text.crowdfunding.availability}</p>
                                    </Col>
                                    <Col md={4} className="text-center">
                                        <div className="price-box p-3 bg-light rounded mb-3">
                                            <h3 className="text-success mb-0">{text.crowdfunding.price}</h3>
                                        </div>
                                        <Button 
                                            variant="success" 
                                            size="lg" 
                                            onClick={() => window.open(gamefoundurl)}
                                            className="w-100 rounded"
                                        >
                                            {text.crowdfunding.buttonText}
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Row>
                            <Col md={6}>
                                <Card className="h-100 border-secondary rounded">
                                    <Card.Body>
                                        <Card.Title>{text.retailInfo.title}</Card.Title>
                                        <Card.Text className="text-start">{text.retailInfo.description}</Card.Text>
                                        <p className="text-muted small text-start">{text.retailInfo.notifyText}</p>
                                        <Button variant="outline-secondary" className="w-100 rounded">
                                            {text.retailInfo.buttonText}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col md={6}>
                                <Card className="h-100 border-info rounded">
                                    <Card.Body>
                                        <Card.Title>{text.shipping.title}</Card.Title>
                                        <ul className="list-unstyled text-start">
                                            {text.shipping.details.map((detail, index) => (
                                                <li key={index} className="mb-2">
                                                    <span className="text-success">✓</span> {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhereToBuy;
