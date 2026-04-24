import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ternImage from './tern.png';
import houseflyImage from './housefly.png';
import CollapsibleSection from './CollapsibleSection';

const CardCorrections = ({ currLang }) => {
    const content = {
        en: {
            title: "Card Corrections",
            tern: {
                text: "Here we have a typo! The <strong>tern</strong> is not nearly a kilogram it is merely 90gr and the correct number for that category would be 0.09-0.12kg"
            },
            housefly: {
                text: "Here we have an unfortunate formatting problem, this is the <strong>scientific version</strong> and it isn't as easy to understand! So an unfortunate error indeed. But that it means is that the value needs <strong>5 zeros in front of it</strong> and the value written <strong>0.000012kg</strong>"
            }
        },
        is: {
            title: "Leiðréttingar á spilum",
            tern: {
                text: "Hér varð innsláttarvilla, <strong>krían</strong> vegur einungis 90gr en ekki heil 900gr og því á að standa þarna <strong>0,09-0,120kg</strong>"
            },
            housefly: {
                text: "Hér er verið að sýna <strong>vísindalegt snið</strong> á tölunni, talan er rétt en getur verið erfitt að lesa hana! Það sem stendur er að það á að setja <strong>5 núll fyrir framan</strong> þessa tölu og fá þannig þessa ofsa smáu tölu <strong>0,000012kg</strong>"
            }
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    return (
        <section className="card-corrections py-5" id="card-corrections">
            <Container>
                <CollapsibleSection defaultOpen={false}>
                    <Row className="justify-content-center mb-2">
                        <Col xs={12} className="text-center">
                            <div className="section-heading-container">
                                <h2 className="text-warning border-warning">
                                    {text.title}
                                </h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center align-items-center position-relative">
                        {/* Left Image - Tern */}
                        <Col lg={3} md={4} sm={6} className="text-center mb-4">
                            <div className="card-image-container position-relative">
                                <img
                                    src={ternImage}
                                    alt="Tern card"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '300px', width: 'auto' }}
                                />
                            </div>
                        </Col>

                        {/* Middle Text Column */}
                        <Col lg={6} md={4} sm={12} className="d-flex flex-column justify-content-between h-100">
                            {/* Top text for tern (left card) */}
                            <div className="correction-text-top position-relative mb-5">
                                <div className="d-flex align-items-start">
                                    <div className="text-warning me-3" style={{ fontSize: '2rem' }}>
                                        <i className="bi bi-arrow-left"></i>
                                    </div>
                                    <div className="bg-light p-3 rounded border border-warning shadow-sm">
                                        {text.tern.text}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom text for housefly (right card) */}
                            <div className="correction-text-bottom position-relative">
                                <div className="d-flex align-items-start justify-content-end">
                                    <div className="bg-light p-3 rounded border border-warning shadow-sm me-3">
{text.housefly.text}
                                    </div>
                                    <div className="text-warning" style={{ fontSize: '2rem' }}>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Right Image - Housefly */}
                        <Col lg={3} md={4} sm={6} className="text-center mb-4">
                            <div className="card-image-container position-relative">
                                <img
                                    src={houseflyImage}
                                    alt="Housefly card"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '300px', width: 'auto' }}
                                />
                            </div>
                        </Col>
                    </Row>
                </CollapsibleSection>
            </Container>

            <style jsx>{`
                .correction-text-top {
                    margin-top: 2rem;
                }
                
                .correction-text-bottom {
                    margin-bottom: 2rem;
                }
                
                @media (max-width: 768px) {
                    .correction-text-top,
                    .correction-text-bottom {
                        margin: 1rem 0;
                    }
                    
                    .correction-text-top .d-flex,
                    .correction-text-bottom .d-flex {
                        justify-content: center !important;
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .correction-text-top .d-flex > div:first-child,
                    .correction-text-bottom .d-flex > div:last-child {
                        align-self: center;
                        margin-bottom: 0.5rem;
                    }
                    
                    .correction-text-bottom .d-flex {
                        flex-direction: column-reverse;
                    }
                }
            `}</style>
        </section>
    );
};

export default CardCorrections;
