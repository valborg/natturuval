import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import plusIcon from '../../public/plus.svg';
import minusIcon from '../../public/minus.svg';

const AdultModeGenerator = ({ currLang }) => {
    const [selectedCondition, setSelectedCondition] = useState('');
    const [selectedConditionTypes, setSelectedConditionTypes] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [expandedRule, setExpandedRule] = useState(null);

    const content = {
        en: {
            title: "Party Rules",
            subtitle: "Spice up your game night with creative challenges!",
            description: "This party version adds humor and creativity to the game. Players must convince others that their animal fits the randomly generated condition.",
            conditionTypes: {
                funny: "Funny & Weird Conditions",
                realistic: "Literal & Realistic Conditions"
            },
            howToPlay: {
                title: "How to Play Party Mode",
                intro: {
                    paragraphs: [
                        "This creative version is for imaginative players who enjoy storytelling and humor. Players choose questions that they then subjectively evaluate, such as:"
                    ],
                    examples: [
                        "Which animal would be late to the airport?",
                        "Which animal lies the most often?",
                        "Which animal would make the news for charity work?"
                    ],
                    conclusion: [
                        "Questions can be silly or practical, realistic or absurd.",
                        "You can use the button below for fun suggestions, or if you're creative enough, make them up on the spot."
                    ]
                },
                modes: [
                    {
                        name: "Classic Party Mode",
                        description: "Traditional party gameplay with creative arguments",
                        rules: {
                            setup: "Each player draws five cards, one player generates a condition and then all players put, face down, a card that they think is a contender for that condition.",
                            gameplay: "Players then take turns making creative arguments for why their animal fits the condition.",
                            winning: "Vote for the most convincing argument and that person keeps their winning card face up on the table in front of them.",
                            endGame: "When the deck has been exhausted the player with the most cards in front of them wins."
                        }
                    },
                    {
                        name: "Speed Party Mode",
                        description: "Quick party rounds with time limits for arguments",
                        rules: {
                            setup: "Same as Classic Party Mode setup.",
                            gameplay: "Players make creative arguments for why their animal fits the condition with a 30-second time limit.",
                            winning: "Vote for the most convincing argument within the time limit.",
                            endGame: "Same winning conditions as Classic Party Mode."
                        }
                    }
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
            title: "Partýreglur",
            subtitle: "Kryddaðu leikjakvöldið með skapandi áskorunum!",
            description: "Þessi partýútgáfa bætir húmor og sköpunargleði við leikinn. Spilarar verða að sannfæra aðra um að þeirra dýr passi við handahófskenndu skilyrðin.",
            conditionTypes: {
                funny: "Fyndin og furðuleg skilyrði",
                realistic: "Bókstafleg og raunhæf skilyrði"
            },
            howToPlay: {
                title: "Hvernig á að spila partýham",
                intro: {
                    paragraphs: [
                        "Þetta afbrigði er fyrir skapandi fólk sem hefur gaman af sögum og spuna. Spilarar velja spurningar sem þeir leggja svo huglægt mat á, eins og þessar:"
                    ],
                    examples: [
                        "Hvaða dýr yrði seint á flugvöllinn?",
                        "Hvaða dýr leggur sig oftast?",
                        "Hvaða dýr komst í fréttirnar fyrir góðgerðarstarf?"
                    ],
                    conclusion: [
                        "Spurningar mega vera kjánalegar eða hagnýtar, raunsæjar eða furðulegar.",
                        "Þið getið notað takkann hérna til að fá skemmtilegar uppástungur, en ef þið eruð nógu skapandi getið þið búið þær til á staðnum."
                    ]
                },
                modes: [
                    {
                        name: "Dómari!",
                        description: "Hefðbundinn partýleikur með skapandi röksemdafærslu",
                        rules: {
                            setup: "Allir spilarar draga fimm spil. Í hverri umferð er einn spilari í hlutverki dómarans.",
                            gameplay: "Dómarinn ræður spurningu umferðarinnar. Hver spilari velur sér spil af hendi sem þeim finnst passa best við spurninguna.",
                            arguments: "Þegar allir hafa valið spil færa spilarar rök fyrir því hvers vegna þeirra dýr passi best við spurninguna.",
                            judging: "Dómarinn ræður hver fær stigið og setur viðkomandi það fyrir framan sig sem stig.",
                            nextRound: "Hinum spilunum er hent í kastbunkann og allir draga upp í fimm spil á hendi.",
                            endGame: "Sigurvegarinn er sá spilari sem er fyrstur til að ná tilteknum fjölda stiga, eins og í grunnspilinu."
                        }
                    },
                    {
                        name: "Lýðræði!",
                        description: "Skjótar partýumferðir með tímamörkum fyrir röksemdafærslu",
                        rules: {
                            setup: "Sama og í Dómari, nema núna fá spilarar að þræta um það saman hvaða skilyrði á að vera fyrir valinu.",
                            gameplay: "Þegar búið er að finna skilyrði færa spilarar rök fyrir sínu dýri og þegar allir hafa fengið að tjá sig hefjast umræður.",
                            judging: "Spilið sem fær flest atkvæði (eða öll) vinnur. Kosning gæti verið samtímis, leynileg eða langdregin umræða. Hvernig sem hópurinn vill hafa það.",
                            timing: "Ef spilari fer yfir valin tímamörk fær næsti strax að byrja sína rullu",
                            endGame: "Sömu sigurskilyrði og áður, fer eftir fjölda spilara eins og kemur fram í reglum grunnspilsins"
                        }
                    }
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
                // Remove type if it's already selected
                return prev.filter(t => t !== type);
            } else {
                // Add type if not selected
                return [...prev, type];
            }
        });
    };

    // Helper function to format rule keys
    const formatRuleKey = (key, lang) => {
        const keyMappings = {
            en: {
                setup: 'Setup',
                gameplay: 'Gameplay',
                arguments: 'Arguments',
                winning: 'Winning',
                endGame: 'End Game',
                judging: 'Judging',
                nextRound: 'Next Round',
                timing: 'Timing'
            },
            is: {
                setup: 'Uppsetning',
                gameplay: 'Leikgangur',
                arguments: 'Röksemdafærsla',
                winning: 'Sigur',
                endGame: 'Leikslok',
                judging: 'Dómgæsla',
                nextRound: 'Næsta umferð',
                timing: 'Tímastjórnun'
            }
        };

        return keyMappings[lang][key] || key;
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

    const handleRuleClick = (index, event) => {
        event.stopPropagation();
        setExpandedRule(expandedRule === index ? null : index);
    };

    const handleOutsideClick = (event) => {
        if (event.target.closest('.party-rule-card')) return;
        setExpandedRule(null);
    };

    return (
        <section className="adult-mode py-5" id="adult-mode" style={{
            backgroundColor: '#f5f5f5',
            backgroundImage: 'radial-gradient(circle, #e0e0e0 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
        }}>
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col xs={12} className="text-center">
                        <div className="section-heading-container d-inline-flex align-items-center">
                            <h2 className="mb-0 text-dark border border-dark rounded px-3 py-2 d-flex align-items-center" style={{ backgroundColor: 'white' }}>
                                {text.title}
                                <img src={minusIcon} width="24" height="24" alt="minus" className="ms-2" />
                            </h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={10} className="mx-auto">
                        {/* <Card className="bg-white border-0 mb-4 rounded shadow-sm">
                            <Card.Body>
                                <p className="text-dark text-start">{text.description}</p>
                            </Card.Body>
                        </Card> */}

                        <Card className="bg-white border-secondary mb-4 rounded shadow-sm">
                            <Card.Header className="rounded-top" style={{ backgroundColor: '#d4edda', color: '#155724', border: 'none' }}>
                                <h4 className="mb-0" style={{ fontSize: '1.5rem' }}>{text.howToPlay.title}</h4>
                            </Card.Header>
                            <Card.Body className="text-dark">
                                <div className="text-start">
                                    {text.howToPlay.intro.paragraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}

                                    <ul>
                                        {text.howToPlay.intro.examples.map((example, index) => (
                                            <li key={index}><em>{example}</em></li>
                                        ))}
                                    </ul>

                                    {text.howToPlay.intro.conclusion.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* Expandable Rules Section */}
                                <div className="mt-4" onClick={handleOutsideClick}>
                                    <h6 className="text-secondary mb-3">Game Variations:</h6>
                                    <Row>
                                        {text.howToPlay.modes.map((mode, index) => (
                                            <Col
                                                key={index}
                                                sm={12}
                                                md={expandedRule === index ? 12 : 6}
                                                className={`mb-3 ${expandedRule === index ? 'expanded-rule' : ''}`}
                                                style={{
                                                    transition: 'all 0.3s ease',
                                                    zIndex: expandedRule === index ? 10 : 1,
                                                    position: 'relative'
                                                }}
                                            >
                                                <Card
                                                    className={`border-secondary h-100 rounded party-rule-card ${expandedRule === index ? 'shadow-lg' : 'cursor-pointer'}`}
                                                    onClick={(e) => handleRuleClick(index, e)}
                                                    style={{
                                                        cursor: 'pointer',
                                                        transform: expandedRule === index ? 'scale(1.02)' : 'scale(1)',
                                                        transition: 'all 0.3s ease',
                                                        backgroundColor: expandedRule === index ? '#f8f9fa' : 'white'
                                                    }}
                                                >
                                                    <Card.Body className="p-3">
                                                        <Card.Title className="h6 text-secondary mb-3 d-flex justify-content-between align-items-center">
                                                            {mode.name}
                                                            <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                                                                {expandedRule === index ? '- ' : '+ '}
                                                            </span>
                                                        </Card.Title>

                                                        {expandedRule === index ? (
                                                            <div>
                                                                <Card.Text className="text-start mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                                                                    <strong>{mode.description}</strong>
                                                                </Card.Text>
                                                                <hr className="my-3" />
                                                                <div className="text-start" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                                                                    <h6 className="text-secondary mb-3">Detailed Rules:</h6>
                                                                    <div>
                                                                        {Object.entries(mode.rules).map(([key, value]) => (
                                                                            <div key={key} className="mb-3">
                                                                                <strong>{formatRuleKey(key, lang)}: </strong>
                                                                                <span>{value}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <Card.Text className="text-start" style={{ fontSize: '0.8rem' }}>
                                                                {mode.description}
                                                            </Card.Text>
                                                        )}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="bg-white border-secondary rounded shadow-sm">
                            <Card.Header className="rounded-top" style={{ backgroundColor: '#d4edda', color: '#155724', border: 'none' }}>
                                <h4 className="mb-0" style={{ fontSize: '1.5rem' }}>
                                    {lang === 'en' ? 'Condition Generator' : 'Skilyrðagerð'}
                                </h4>
                            </Card.Header>
                            <Card.Body className="text-dark">
                                <div className="mb-4">
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        {Object.entries(text.conditionTypes).map(([key, label]) => (
                                            <Button
                                                key={key}
                                                onClick={() => toggleConditionType(key)}
                                                className="rounded"
                                                style={{
                                                    minWidth: '120px',
                                                    backgroundColor: selectedConditionTypes.includes(key) ? '#155724' : 'transparent',
                                                    borderColor: '#155724',
                                                    color: selectedConditionTypes.includes(key) ? 'white' : '#155724'
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Button
                                        size="lg"
                                        onClick={generateCondition}
                                        disabled={isGenerating || selectedConditionTypes.length === 0}
                                        className="mb-4 rounded"
                                        style={{
                                            backgroundColor: selectedConditionTypes.length === 0 ? '#ccc' : '#155724',
                                            borderColor: selectedConditionTypes.length === 0 ? '#ccc' : '#155724',
                                            color: 'white'
                                        }}
                                    >
                                        {isGenerating ? '...' : text.generateButton}
                                    </Button>

                                    {selectedCondition && (
                                        <Alert className="p-4 rounded" style={{ backgroundColor: '#d4edda', borderColor: '#155724', color: '#155724' }}>
                                            <h5 className="mb-0" style={{ color: '#155724' }}>"{selectedCondition}"</h5>
                                        </Alert>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AdultModeGenerator;
