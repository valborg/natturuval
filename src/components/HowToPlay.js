import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import coolfiskurinn from '../../public/coolfiskurinn.png';
import coolstar from '../../public/coolstar.png';
import fight from '../../public/fight.png';
import baratta from '../../public/baratta.png';
import sciNameIcon from '../../public/SciName.svg';
import offspringIcon from '../../public/Offspring.svg';
import lifespanIcon from '../../public/Lifespan.svg';
import lengthIcon from '../../public/Length.svg';
import feetIcon from '../../public/Feet.svg';
import weightIcon from '../../public/Weight.svg';

const HowToPlay = ({ currLang }) => {
    const [expandedCard, setExpandedCard] = useState(null);

    const content = {
        en: {
            title: "How to Play",
            subtitle: "Learn the rules and start playing!",
            basicRules: {
                title: "Basic Rules",
                steps: [
                    "Each player draws five cards from the deck",
                    "Choose a category by rolling the dice or selecting manually",
                    "Players choose a card their hand to play",
                    "Compare the cards' values for the chosen category",
                    "The player with the highest/lowest value wins the round",
                    "Winner takes their winning card as a point",
                    "Game ends when one player gets enough points to win"
                ]
            },
            categories: {
                title: "Card Categories",
                list: [
                    "Scientific Name: Length of scientific name, number of characters",
                    "Offspring: Average number of offspring per litter",
                    "Lifespan: Average lifespan in years (in the wild)",
                    "Length: Body length of adult animal as measured on the animal, from tip to toe or over the shell etc.",
                    "Legs: Number of legs",
                    "Weight: Average weight of adult animal in kilograms"
                ]
            },
            variations: {
                title: "Game Variations",
                modes: [
                    {
                        name: "Basic Mode",
                        description: "The basic rules above with more details",
                        structuredRules: {
                            setup: "Shuffle all cards. Each player draws five cards to their hand and doesn't show them to other players. Put the rest of the cards in a deck in the center. Leave space for a discard pile next to the deck. The youngest player starts.",
                            challenge: "The starting player throws both dice. The category die shows which category to compete in this round, the comparison die shows whether to compete for the lowest or highest value in the category. Together they form the challenge.",
                            cardChoice: "All players choose one card from their hand that they think can win this challenge.",
                            battle: "All players place their card face down in front of them. When all players have laid down cards, count \"1, 2, 3, NOW!\" and reveal all cards at the same time.",
                            resolution: "The animal that best matches the challenge conditions wins. The player who played the winning card gets to place it face up in front of them for all to see.",
                            special: "If any card shows a number range for the competing category, only look at one number. The higher number if competing for + and the lower number if competing for -.",
                            ties: "To resolve ties, first put all tied animals in the discard pile. Throw the dice again to get a new challenge. Repeat until a winner is found.",
                            nextRound: "All cards except the winning card go to the discard pile. All players draw cards from the deck so they have five cards in hand. The dice go to the next player to the left, and a new round begins by throwing the dice again.",
                            gameEnd: "The game ends when someone reaches a certain number of points: 2 players: 12 points, 3-4 players: 10 points, 5+ players: 8 points"
                        },
                    },
                    {
                        name: "Wild player 5+",
                        description: "The deck becomes a player, can you beat the randomness of nature?",
                        structuredRules: {
                            setup: "In basic mode, and many variants, where players choose a card from their hand you can play a wild card from the deck",
                            cardChoice: "The wild player always plays at random, the top of the deck.",
                            resolution: "The wild player can earn points, and can even win the game!",
                            specials: "Could random chance really win against a carefully chosen champion?",

                        }
                    },
                    {
                        name: "Ultimate Beastkeeper (up to 10yo)",
                        description: "This one is about endurance",
                        structuredRules: {
                            setup: "The deck is divided evenly among players. Any leftover cards are discarded at the beginning of the game and are not used.",
                            cardChoice: "For each round, the dice are thrown and players play their topmost card, no matter what it is.",
                            resolution: "The winner is determined as in the base game. The winner gets all other cards and places them under their deck.",
                            ties: "If there is a tie, the tied players keep putting out cards to settle the round using the same category and comparison until a winner is determined. The winner keeps all the cards, including the tiebreakers.",
                            gameEnd: "The game ends when one player’s deck is exhausted, or when the players are exhausted. The player with the most cards in their deck at the end wins."
                        }
                    },
                    {
                        name: "Speed Mode (6yo+)",
                        description: "Find the winner faster than the others!",
                        structuredRules: {
                            setup: "Draw three cards face down, then roll the dice to determine challenge. On the count of 3, reveal all the cards at once.",
                            resolution: "The first player to slap the winning card gets to keep it as a point. You can’t slap more than one card in a round, so think fast!",
                            gameEnd: "All cards go into discard and no points are tallied. "
                        },
                    },
                    {
                        name: "Easy Peasy (Preschool)",
                        description: "Low stakes game for younger players",
                        structuredRules: {
                            setup: "Each kid draws one card to play, they can either keep them secret or play immideatly.",
                            special: "There are no points, but the kid who played the winning cards gets to throw the dice for the next round.",
                            factChallenge: "Players can challenge unusual animal statistics. If a fact is disputed, look it up together!",
                            bonusPoints: "Award extra points for sharing genuinely surprising facts about animals played.",
                            discussionTime: "Allow 2-3 minutes after each round for educational discussion. Perfect for families and classroom settings!"
                        },
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
                    "Hver spilari dregur fimm spil úr stokknum",
                    "Veljið flokk með því að kasta teningunum eða veljið sjálf",
                    "Spilarar velja spil úr hendi til að spila",
                    "Berið saman gildin í flokknum",
                    "Spilarinn með hæsta/lægsta gildið vinnur umferðina",
                    "Sigurvegarinn tekur sitt spil sem stig",
                    "Leik lýkur þegar einn spilari fær næg stig til að vinna"
                ]
            },
            categories: {
                title: "Upplýsingaflokkar",
                list: [
                    "Fræðiheiti: Lengd fræðiheitis, fjöldi stafa",
                    "Afkvæmi: Fjöldi afkvæma að meðaltali í einu goti",
                    "Líftími: Meðallíftími í árum (í náttúrunni)",
                    "Lengd: Líkamslengd fullorðins dýrs, eins og hún er mæld hjá dýrinu, frá toppi til táa eða yfir skelina og þess háttar",
                    "Fætur: Fjöldi fóta",
                    "Þyngd: Meðalþyngd fullorðins dýrs í kílóum"
                ]
            },
            variations: {
                title: "Afbrigði",
                modes: [
                    {
                        name: "Hefðbundnar reglur - nánari útskýring",
                        description: "Hefðbundinn leikur með teningakasti til að velja flokka",
                        structuredRules: {
                            setup: "Stokkaðu öllum spilunum. Hver spilari dregur fimm spil í hendi og sýnir þau ekki öðrum spilurum. Settu restina af spilunum í stokkinn í miðjuna. Skildu eftir pláss fyrir kastbunkann við hliðina á stokknum. Yngsti spilarinn byrjar.",
                            challenge: "Spilarinn sem byrjar kastar báðum teningunnum. Flokkateningurinn sýnir í hvaða flokki sé keppt í þessari umferð, samanburðarteningurinn sýnir hvort keppt sé um lægsta eða hæsta gildið í flokkinum. Saman verða þeir að áskoruninni.",
                            cardChoice: "Þá velja allir spilarar eitt spil af hendi sem þeir telja geta sigrað þessa áskorun.",
                            battle: "Allir spilarar setja spilið sitt á grúfu fyrir framan sig. Þegar allir spilarar hafa lagt niður spil, skulið þið telja '1, 2, 3, NÚ!' og sýna spilin á sama tíma.",
                            resolution: "Það dýr sem passar best við skilyrði áskoruninnar vinnur. Spilarinn sem spilaði vinningsspilinu fær að setja það fyrir framan sig svo allir sjái.",
                            special: "Ef eitthvað spil sýnir talnabil fyrir gildið í flokknum sem verið er að keppa í, þá er aðeins horft á aðra töluna. Hærri töluna ef verið er að keppa í + og lægri töluna ef keppt er í -.",
                            ties: "Til að skera úr um jafntefli þá skal fyrst setja öll dýr, sem detta út, í kastbunkann. Kastið teningunum aftur til að fá nýja áskorun. Endurtakið þetta þar til að sigurvegari finnst.",
                            nextRound: "Öll spil, nema vinningsspilið, fara í kastbunkann. Allir spilarar draga spil úr bunkanum svo þeir séu með fimm spil á hendi. Teningarnir fara til næsta spilara til vinstri, og ný umferð hefst með því að kasta teningunum aftur og fá upp nýja áskorun.",
                            gameEnd: "Leiknum lýkur þegar einhver spilari hefur náð tilteknum stigafjölda. 2 spilarar: 12 stig, 3-4 spilarar: 10 stig, 5+ spilarar: 8 stig. Það má líka halda áfram þar til stokkurinn klárast eða spilarar eru búnir á því. Ef þið stokkið kastbunkann getið haldið áfram eins lengi og þið viljið. Ef það er einhvern tímann jafntefli í lok leiks þá deila þeir spilarar sigrinum."
                        },
                    },
                    {
                        name: "Jókerspilari, 5+ ára",
                        description: "Leyfðu stokknum að spila, hann gæti unnið!",
                        structuredRules: {
                            setup: "Í grunnspilinu, og í mörgum öðrum afbrigðum þar sem valið er spil af hendi, er hægt að draga spil af handahófi úr stokknum og láta bunkann þannig verða spilara.",
                            cardChoice: "Jókerspilarinn velur alltaf af handahófi - efsta spilið úr stokknum.",
                            resolution: "Allar venjulegar reglur gilda og Jókerspilarinn fær stig eins og aðrir.",
                            challenge: "Á slembilukka möguleika á að vinna gegn garpi sem valinn var af kostgæfni?"
                        }
                    },
                    {
                        name: "Langavitleysa, allt að 10 ára",
                        description: "Spilarar halda áfram þar til einn stendur eftir",
                        structuredRules: {
                            setup: "Í Löngavitleysu er stokknum skipt jafnt milli spilara. Ef spil eru til viðbótar eru þau tekin úr leik í byrjun.",
                            cardChoice: "Í hverri umferð er teningunum kastað, spilarar sýna efsta spilið í sínum bunka og spila því út skilyrðislaust.",
                            resolution: "Sigurvegari er ákvarðaður eins og venjulega. Sigurvegarinn fær öll spilin sem var spilað í umferðinni og setur neðst í bunkann sinn.",
                            ties: "Ef upp kemur jafntefli þá keppa þeir spilarar aftur sem voru jafnir, og spila öðru spili, efsta spilinu sínu, áskorunin er áfram sú sama. Slagurinn stækkar þar til jafnteflið er útkljáð.",
                            gameEnd: "Spilið klárast þegar einhver spilari er með öll spilin í sínum bunka, eða spilarar þreytast á vitleysunni. Þá vinnur spilarinn sem er með flest spil í sínum bunka."
                        }
                    },
                    {
                        name: "Hraðar hendur, 6+ ára",
                        description: "Keppt er að því að vera fyrst til að finna sigurspilið",
                        structuredRules: {
                            setup: "Setjið niður þrjú spil á grúfu, kastið teningunum til að fá áskorun.",
                            battle: "Snúið öllum spilunum við á sama tíma þegar áskorunin er tilbúin.",
                            resolution: "Fyrsti spilarinn sem slær á vinningsspilið fær það sem stig. Það má bara slá einu sinni í hverri umferð.",
                            special: "Til að spila þetta enn hraðar getið þið látið spilin snúa upp áður en þið kastið.",
                            warning: "Farið varlega."
                        }
                    },
                    {
                        name: "Léttmeti (leikskólaalur)",
                        description: "Keppni um að fá að kasta teningum",
                        structuredRules: {
                            setup: "Allir spilarar draga eitt spil á hendi, einhver kastar báðum teningum.",
                            resolution: "Finnið sigurvegarann saman eins og í grunnspilinu.",
                            nextRound: "Vinningshafinn fær að kasta teningunum í næstu umferð og öll spil fara í kastbunkann.",
                            special: "Engin stig eru talin - þetta er bara skemmtun!"
                        }
                    }

                ]
            }
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];
    const coolfish = lang === 'en' ? coolstar : coolfiskurinn;
    const fightImage = lang === 'en' ? baratta : fight;

    // Category icons mapping
    const categoryIcons = [sciNameIcon, offspringIcon, lifespanIcon, lengthIcon, feetIcon, weightIcon];

    // Helper function to format rule keys for better display
    const formatRuleKey = (key, lang) => {
        const keyMappings = {
            en: {
                setup: 'Setup',
                challenge: 'The Challenge',
                cardChoice: 'Choose Your Card',
                battle: 'Battle',
                resolution: 'Resolution',
                special: 'Special Rule',
                ties: 'Ties',
                nextRound: 'Next Round',
                gameEnd: 'Game End'
            },
            is: {
                setup: 'Uppsetning',
                challenge: 'Áskorunin',
                cardChoice: 'Veljið spil',
                battle: 'Barátta',
                resolution: 'Uppgjör',
                special: 'Sérstök regla',
                ties: 'Jafntefli',
                nextRound: 'Næsta umferð',
                gameEnd: 'Leikslok'
            }
        };

        return keyMappings[lang]?.[key] || key;
    };

    // Safe content renderer - uses structured content only
    const renderGameRules = (mode) => {
        // Only use structured rules (safer)
        if (mode.structuredRules) {
            return (
                <div>
                    {Object.entries(mode.structuredRules).map(([key, value]) => (
                        <div key={key} className="mb-3">
                            <strong>{formatRuleKey(key, lang)}: </strong>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        return <p>No rules available - please add structuredRules</p>;
    };

    const handleCardClick = (index, event) => {
        event.stopPropagation();
        setExpandedCard(expandedCard === index ? null : index);
    };

    const handleOutsideClick = (event) => {
        if (event.target.closest('.game-variation-card')) return;
        setExpandedCard(null);
    };

    return (
        <section className="how-to-play py-5 bg-light" id="how-to-play">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col xs={12} className="text-center">
                        <div className="section-heading-container d-inline-flex align-items-center">
                            <h2 className="mb-0 text-success border border-success rounded px-3 py-2 d-flex align-items-center">
                                {text.title}
                                <img src={lengthIcon} width="24" height="24" alt="length" className="ms-2" />
                            </h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={8} className="mx-auto">
                        <Accordion defaultActiveKey="0" className="mb-5">
                            <Accordion.Item eventKey="0" className="rounded">
                                <Accordion.Header>{text.basicRules.title}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex align-items-start mb-3">
                                        <img src={lengthIcon} width="60" height="60" alt="length" className="me-3 flex-shrink-0" />
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
                                            <li key={index} className="mb-3 d-flex align-items-center">
                                                <img src={categoryIcons[index]} width="24" height="24" alt={`category ${index + 1}`} className="me-3 flex-shrink-0" />
                                                <span>{category}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className="rounded">
                                <Accordion.Header>{text.variations.title}</Accordion.Header>
                                <Accordion.Body>
                                    <div onClick={handleOutsideClick}>
                                        <Row>
                                            {text.variations.modes.map((mode, index) => (
                                                <Col
                                                    key={index}
                                                    sm={12}
                                                    md={expandedCard === index ? 12 : 6}
                                                    className={`mb-3 ${expandedCard === index ? 'expanded-card' : ''}`}
                                                    style={{
                                                        transition: 'all 0.3s ease',
                                                        zIndex: expandedCard === index ? 10 : 1,
                                                        position: 'relative'
                                                    }}
                                                >
                                                    <Card
                                                        className={`border-success h-100 rounded game-variation-card ${expandedCard === index ? 'shadow-lg' : 'cursor-pointer'}`}
                                                        onClick={(e) => handleCardClick(index, e)}
                                                        style={{
                                                            cursor: 'pointer',
                                                            transform: expandedCard === index ? 'scale(1.02)' : 'scale(1)',
                                                            transition: 'all 0.3s ease',
                                                            backgroundColor: expandedCard === index ? '#f8f9fa' : 'white'
                                                        }}
                                                    >
                                                        <Card.Body className="p-4">
                                                            <Card.Title className="h5 text-success mb-3 d-flex justify-content-between align-items-center">
                                                                {mode.name}
                                                                <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                                                                    {expandedCard === index ? '- ' : '+ '}
                                                                </span>
                                                            </Card.Title>

                                                            {expandedCard === index ? (
                                                                <div>
                                                                    <Card.Text className="text-start mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                                                        <strong>{mode.description}</strong>
                                                                    </Card.Text>
                                                                    <hr className="my-3" />                                                                    <div className="text-start" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>

                                                                        {renderGameRules(mode)}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <Card.Text className="text-start" style={{ fontSize: '0.9rem' }}>
                                                                    {mode.description}
                                                                </Card.Text>
                                                            )}
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                {/* Battle demonstration section */}
                {/* <Row className=" mb-3">
                    <Col xs={0} lg={3} className="justify-content-center mb-3 mb-lg-0 d-flex">
                        <h5></h5>
                    </Col>
                    <Col xs={12} lg={3} className="justify-content-center mb-3 mb-lg-0 d-flex">
                        <img src={fightImage} className="img-fluid" style={{ maxWidth: 'auto', maxHeight: '400px' }} alt="animal battle" />
                    </Col>
                    <Col xs={12} lg={3} className="justify-content-center d-flex flex-column">
                        <h3>{lang === 'en' ? 'Here we have an obvious winner in the battle of leg count' : 'Hér sjáum við augljósan sigurvegara í baráttunni um fótafjölda'}</h3>
                        <img src={coolfish} className="img-fluid" style={{ maxWidth: 'auto' }} alt="cool animal winner" />
                    </Col>
                    <Col xs={0} lg={3} className="justify-content-center mb-3 mb-lg-0 d-flex">
                        <h5></h5>
                    </Col>
                </Row> */}
            </Container>

            <style jsx>{`
                .accordion-button {
                    font-size: 1.25rem !important;
                    font-weight: 600 !important;
                }
                .accordion-button:not(.collapsed) {
                    background-color: #d4edda !important;
                    color: #155724 !important;
                    border-color: #c3e6cb !important;
                }
                .accordion-button:focus {
                    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25) !important;
                }
            `}</style>
        </section>
    );
};

export default HowToPlay;
