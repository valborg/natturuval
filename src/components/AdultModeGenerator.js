import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, ButtonGroup } from 'react-bootstrap';
import dice from '../../public/dice.png';

const AdultModeGenerator = ({ currLang }) => {
    const [selectedCondition, setSelectedCondition] = useState('');
    const [selectedConditionTypes, setSelectedConditionTypes] = useState(['funny', 'realistic']); // Start with both selected
    const [isGenerating, setIsGenerating] = useState(false);

    const content = {
        en: {
            title: "Adult Mode - Party Rules",
            subtitle: "Spice up your game night with creative challenges!",
            description: "This party version adds humor and creativity to the game. Players must convince others that their animal fits the randomly generated condition.",
            conditionTypes: {
                funny: "Funny & Weird Conditions",
                realistic: "Literal & Realistic Conditions"
            },
            howToPlay: {
                title: "How to Play Party Mode",
                steps: [
                    "Each player draws one card",
                    "Generate a random condition using the button below",
                    "Players take turns convincing others their animal fits the condition",
                    "Vote for the most convincing argument",
                    "Winner gets both cards!"
                ]
            },
            generateButton: "Generate New Condition",
            conditions: {
                funny: [
                    "Most likely to start a dance revolution",
                    "Would definitely get kicked out of a library",
                    "Most likely to become a social media influencer",
                    "Would win at hide and seek in a grocery store",
                    "Most likely to accidentally start a forest fire",
                    "Would be terrible at keeping secrets",
                    "Most likely to become a professional wrestler",
                    "Would definitely get lost in their own home",
                    "Most likely to panic in an elevator",
                    "Would be the worst roommate ever"
                ],
                realistic: [
                    "Has the strongest bite force",
                    "Can survive the longest without water",
                    "Has the best night vision",
                    "Can run the fastest over short distances",
                    "Has the most sensitive hearing",
                    "Can hold their breath the longest",
                    "Has the strongest grip strength",
                    "Can jump the highest relative to body size",
                    "Has the thickest skin or fur",
                    "Can survive in the coldest temperatures"
                ]
            }
        },
        is: {
            title: "Fullorðinshamur - Partýreglur",
            subtitle: "Kryddaðu leikjakvöldið með skapandi áskorunum!",
            description: "Þessi partýútgáfa bætir húmor og sköpunargleði við leikinn. Spilarar verða að sannfæra aðra um að þeirra dýr passi við handahófskenndu skilyrðin.",
            conditionTypes: {
                funny: "Fyndin og furðuleg skilyrði",
                realistic: "Bókstafleg og raunhæf skilyrði"
            },
            howToPlay: {
                title: "Hvernig á að spila partýham",
                steps: [
                    "Hver spilari dregur eitt spil",
                    "Búðu til handahófskennt skilyrði með takkanum hér að neðan",
                    "Spilarar skiptast á að sannfæra aðra um að þeirra dýr passi við skilyrðið",
                    "Kjósið um sannfærandustu röksemmdina",
                    "Sigurvegarinn fær bæði spilin!"
                ]
            },
            generateButton: "Búa til nýtt skilyrði",
            conditions: {
                funny: [
                    "Líklegast til að byrja dansbylgingu",
                    "Myndi örugglega vera hent úr bókasafni",
                    "Líklegast til að verða áhrifavaldur á samfélagsmiðlum",
                    "Myndi vinna í feluleik í matvöruverslun",
                    "Líklegast til að kveikja skógareld fyrir slysni",
                    "Myndi vera hræðilegur í að geyma leyndarmál",
                    "Líklegast til að verða atvinnuglímumaður",
                    "Myndi örugglega villast í eigin húsi",
                    "Líklegast til að örvænta í lyftu",
                    "Myndi vera versti herbergisfélagi allra tíma"
                ],
                realistic: [
                    "Hefur sterkasta bitstyrkinn",
                    "Getur lifað lengst án vatns",
                    "Hefur bestu nætursjónina",
                    "Getur hlaupið hraðast yfir stuttar vegalengdir",
                    "Hefur næmstu heyrnina",
                    "Getur haldið önduninni lengst",
                    "Hefur sterkasta gripstyrk",
                    "Getur stökkva hæst miðað við líkamsstærð",
                    "Hefur þykkastu húð eða feld",
                    "Getur lifað af í köldustu hitastigum"
                ]
            }
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    const toggleConditionType = (type) => {
        setSelectedConditionTypes(prev => {
            if (prev.includes(type)) {
                // Remove type if it's already selected (but keep at least one)
                return prev.length > 1 ? prev.filter(t => t !== type) : prev;
            } else {
                // Add type if not selected
                return [...prev, type];
            }
        });
    };

    const generateCondition = () => {
        if (selectedConditionTypes.length === 0) return;
        
        setIsGenerating(true);
        setTimeout(() => {
            // Get random type from selected types
            const randomType = selectedConditionTypes[Math.floor(Math.random() * selectedConditionTypes.length)];
            const conditions = text.conditions[randomType];
            const randomIndex = Math.floor(Math.random() * conditions.length);
            setSelectedCondition(conditions[randomIndex]);
            setIsGenerating(false);
        }, 500);
    };

    return (
        <section className="adult-mode py-5 bg-dark text-white" id="adult-mode">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col xs={12} className="text-center">
                        <div className="section-heading-container d-inline-flex align-items-center">
                            <h2 className="mb-0 text-white border border-white rounded px-3 py-2 d-flex align-items-center">
                                {text.title}
                                <img src={dice} width="24" height="24" alt="dice" className="ms-2" style={{filter: 'invert(1)'}} />
                            </h2>
                        </div>
                    </Col>
                </Row>
                <p className="text-center text-muted mb-5">{text.subtitle}</p>

                <Row>
                    <Col lg={8} className="mx-auto">
                        <Card className="bg-secondary border-0 mb-4 rounded">
                            <Card.Body>
                                <p className="text-white text-start">{text.description}</p>
                            </Card.Body>
                        </Card>

                        <Card className="bg-dark border-success mb-4 rounded">
                            <Card.Header className="bg-success text-white rounded-top">
                                <h4 className="mb-0">{text.howToPlay.title}</h4>
                            </Card.Header>
                            <Card.Body className="text-white">
                                <ol className="text-start">
                                    {text.howToPlay.steps.map((step, index) => (
                                        <li key={index} className="mb-2">{step}</li>
                                    ))}
                                </ol>
                            </Card.Body>
                        </Card>

                        <Card className="bg-dark border-warning rounded">
                            <Card.Header className="bg-warning text-dark rounded-top">
                                <h4 className="mb-0">🎲 {lang === 'en' ? 'Condition Generator' : 'Skilyrðagjafi'}</h4>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <div className="mb-4">
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        {Object.entries(text.conditionTypes).map(([key, label]) => (
                                            <Button
                                                key={key}
                                                variant={selectedConditionTypes.includes(key) ? "warning" : "outline-warning"}
                                                onClick={() => toggleConditionType(key)}
                                                className="rounded"
                                                style={{minWidth: '120px'}}
                                            >
                                                {label}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <Button 
                                    variant="warning" 
                                    size="lg" 
                                    onClick={generateCondition}
                                    disabled={isGenerating}
                                    className="mb-4 rounded"
                                >
                                    {isGenerating ? '🎲 ...' : `🎲 ${text.generateButton}`}
                                </Button>

                                {selectedCondition && (
                                    <Alert variant="light" className="p-4 rounded">
                                        <h5 className="text-dark mb-0">"{selectedCondition}"</h5>
                                    </Alert>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AdultModeGenerator;
