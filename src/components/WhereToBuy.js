import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import dice from '../../public/plus.svg';

const WhereToBuy = ({ currLang }) => {
    const [showShippingInfo, setShowShippingInfo] = useState(false);
    const content = {
        en: {
            title: "Where to Buy",
            subtitle: "Get your copy of Náttúruval",
            crowdfunding: {
                title: "Availability",
                description: "Currently available through our Gamefound crowdfunding campaign with late pledges, soon to be available in stores",
                price: "$22 USD",
                includes: "Includes full card deck, custom dice, and rulebook in English or Icelandic",
                buttonText: "Buy online",
                availability: ""
            },
            retailInfo: {
                title: "Future Retail",
                description: "The game will be available through select retailers and online",
                notifyText: "Sign up to be notified when retail sales begin",
                buttonText: "Join Waiting List"
            },
            shipping: {
                title: "Shipping Information",
                details: [
                    "Worldwide shipping available",
                    "Estimated delivery: 3-4 weeks after production",
                    "Free shipping costs are calculated per order"
                ]
            }
        },
        is: {
            title: "Hvar á að kaupa spilið",
            subtitle: "Fáðu þitt eintak af Náttúruvali",
            crowdfunding: {
                title: "Hvernig á að nálgast það",
                description: "Núna fáanlegt í gegnum hópfjármögnun á Karolinafund. Verður bráðlega selt í A4 og Hagkaup",
                price: "2800 kr",
                includes: "Inniheldur stærðarinnar spilastokk, sérhannaða teninga og regluhandbók á íslensku, eða ensku",
                buttonText: "Kaupa á netinu",
                availability: ""
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
                    "Áætlaður afhendingartími: 3-4 vikur eftir framleiðslu",
                    "Sendingarkostnaður er reiknaður fyrir hverja pöntun",
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

                <Row>
                    <Col lg={8} className="mx-auto">
                        <Card className="border-success mb-4 shadow rounded">
                            <Card.Header className="bg-success text-white rounded-top">
                                <h4 className="mb-0">{text.crowdfunding.title}</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={8}>
                                        <p className="text-start">
                                            {text.crowdfunding.description}
                                            <span
                                                onClick={() => setShowShippingInfo(!showShippingInfo)}
                                                style={{
                                                    cursor: 'pointer',
                                                    marginLeft: '5px',
                                                    color: '#007bff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2em'
                                                }}
                                                title={lang === 'is' ? "Smelltu fyrir sendingarupplýsingar" : "Click for shipping information"}
                                            >
                                                ℹ️
                                            </span>
                                        </p>

                                        {showShippingInfo && (
                                            <div
                                                className="alert alert-info rounded mb-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    backgroundColor: '#d1ecf1',
                                                    borderColor: '#bee5eb',
                                                    color: '#0c5460'
                                                }}
                                            >
                                                <h6 className="mb-2">{text.shipping.title}</h6>
                                                <ul className="mb-0 text-start">
                                                    {text.shipping.details.map((detail, index) => (
                                                        <li key={index}>{detail}</li>
                                                    ))}
                                                </ul>
                                                <div className="mt-2 text-end">
                                                    <small
                                                        onClick={() => setShowShippingInfo(false)}
                                                        style={{ cursor: 'pointer', color: '#0c5460', textDecoration: 'underline' }}
                                                    >
                                                        {lang === 'is' ? 'Loka' : 'Close'}
                                                    </small>
                                                </div>
                                            </div>
                                        )}

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
                            {/* <Col md={6}>
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
                            </Col> */}

                            {/* <Col md={6}>
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
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhereToBuy;
