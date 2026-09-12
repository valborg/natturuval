import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ternImage from './tern.png';
import houseflyImage from './housefly.png';
import djoflaskataIsImage from '../../public/djoflaskata_is.jpg';
import djoflaskataEnImage from '../../public/djoflaskata_en.jpg';
import CollapsibleSection from './CollapsibleSection';
import offspringIcon from '../../public/Offspring.svg';

const CardCorrections = ({ currLang }) => {
    const content = {
        en: {
            title: "Card Corrections",
            tern: {
                text: "Here we have a typo! The <strong>tern</strong> is not nearly a kilogram it is merely 90gr and the correct number for that category would be 0.09-0.12kg"
            },
            housefly: {
                text: "Here we have an unfortunate formatting problem, this is the <strong>scientific version</strong> of the <strong>housefly's</strong> weight and it isn't as easy to understand! So an unfortunate error indeed. But that it means is that the value needs <strong>5 zeros in front of it</strong> and the value written <strong>0.000012kg</strong>"
            },
            djoflaskata: {
                text: "<strong>The Giant oceanic manta ray</strong> is really giant, and it can be anywhere from 770kg up to <strong>1400kg</strong>, the upper bound really needs to be above the lower bound and 140kg was an unfortunate typo."
            }
        },
        is: {
            title: "Leiðréttingar á spilum",
            tern: {
                text: "Hér varð innsláttarvilla, <strong>krían</strong> vegur einungis 90gr en ekki heil 900gr og því á að standa þarna <strong>0,09-0,120kg</strong>"
            },
            housefly: {
                text: "Hér er verið að sýna <strong>vísindalegt snið</strong> á þyngd <strong>húsflugunnar</strong>, talan er rétt en getur verið erfitt að lesa hana! Það sem stendur er að það á að setja <strong>5 núll fyrir framan</strong> þessa tölu og fá þannig þessa ofsa smáu tölu <strong>0,000012kg</strong>"
            },
            djoflaskata: {
                text: "<strong>Djöflaskatan</strong> er ansi stórvaxin hún getur verið á milli 770 kg og <strong>1400 kg</strong> það gengur ekki að neðri mörkin séu lægri en þau efri, hér var gerð innsláttarvilla"
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
                                    <img src={offspringIcon} width="24" height="24" alt="offspring" className="me-2" />
                                    {text.title}
                                </h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center align-items-start">
                        {/* Tern Card */}
                        <Col lg={4} md={4} sm={12} className="text-center mb-4 correction-card">
                            <div className="card-image-container mb-3">
                                <img
                                    src={ternImage}
                                    alt="Tern card"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '300px', width: 'auto' }}
                                />
                            </div>
                            <div className="bg-light p-3 rounded border border-warning shadow-sm text-start" dangerouslySetInnerHTML={{ __html: text.tern.text }}>
                            </div>
                        </Col>

                        {/* Housefly Card */}
                        <Col lg={4} md={4} sm={12} className="text-center mb-4 correction-card">
                            <div className="card-image-container mb-3">
                                <img
                                    src={houseflyImage}
                                    alt="Housefly card"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '300px', width: 'auto' }}
                                />
                            </div>
                            <div className="bg-light p-3 rounded border border-warning shadow-sm text-start" dangerouslySetInnerHTML={{ __html: text.housefly.text }}>
                            </div>
                        </Col>

                        {/* Mobile-only arrow pointing down towards the new card below */}
                        {/* <Col xs={12} className="d-flex d-md-none justify-content-center mb-2">
                            <div className="text-warning" style={{ fontSize: '2rem' }}>
                                <i className="bi bi-arrow-down"></i>
                            </div>
                        </Col> */}

                        {/* Devil ray (Djöflaskata) Card - language-specific image */}
                        <Col lg={4} md={4} sm={12} className="text-center mb-4 correction-card">
                            <div className="card-image-container mb-3">
                                <img
                                    src={lang === 'en' ? djoflaskataEnImage : djoflaskataIsImage}
                                    alt="Devil ray card"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '300px', width: 'auto' }}
                                />
                            </div>
                            <div className="bg-light p-3 rounded border border-warning shadow-sm text-start" dangerouslySetInnerHTML={{ __html: text.djoflaskata.text }}>
                            </div>
                        </Col>
                    </Row>
                </CollapsibleSection>
            </Container>

            <style jsx>{`
                .correction-card {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </section>
    );
};

export default CardCorrections;
