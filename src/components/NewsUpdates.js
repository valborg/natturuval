import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import dice from '../../public/dice.png';

const NewsUpdates = ({ currLang }) => {
    const content = {
        en: {
            title: "News & Updates",
            subtitle: "Stay updated with the latest from Náttúruval",
            news: [
                {
                    date: "December 2024",
                    title: "Campaign Milestone Reached!",
                    content: "We've reached 75% of our funding goal! Thank you to all our amazing backers. New stretch goals have been announced including glow-in-the-dark dice!",
                    type: "milestone",
                    status: "new"
                },
                {
                    date: "November 2024",
                    title: "Production Update",
                    content: "Our partnership with Panda Game Manufacturing is confirmed. The same company that produced Scythe and Wingspan will bring Náttúruval to life!",
                    type: "production",
                    status: ""
                },
                {
                    date: "October 2024",
                    title: "New Art Reveal",
                    content: "Kate Estrop has completed the artwork for 50 additional animal cards! Check out the beautiful illustrations on our Gamefound page.",
                    type: "art",
                    status: ""
                },
                {
                    date: "September 2024",
                    title: "Campaign Launch",
                    content: "Náttúruval crowdfunding campaign is now live on Gamefound! Early bird pricing available for the first 48 hours.",
                    type: "launch",
                    status: ""
                },
                {
                    date: "August 2024",
                    title: "Beta Testing Complete",
                    content: "Final round of playtesting completed with families across Iceland and Boston. Game balance and rules have been finalized.",
                    type: "development",
                    status: ""
                }
            ],
            types: {
                milestone: { color: "success", icon: "🎉" },
                production: { color: "primary", icon: "🏭" },
                art: { color: "info", icon: "🎨" },
                launch: { color: "warning", icon: "🚀" },
                development: { color: "secondary", icon: "🔧" }
            }
        },
        is: {
            title: "Fréttir og uppfærslur",
            subtitle: "Haltu þér upplýstum um það nýjasta frá Náttúruvali",
            news: [
                {
                    date: "Desember 2024",
                    title: "Fjármögnunarmarkmiði náð!",
                    content: "Við höfum náð 75% af fjármögnunarmarkmiðinu okkar! Takk fyrir til allra ótrúlegu bakhjarlanna okkar. Ný teygjanleg markmið hafa verið tilkynnt þar á meðal ljómandi teningur!",
                    type: "milestone",
                    status: "new"
                },
                {
                    date: "Nóvember 2024",
                    title: "Framleiðsluuppfærsla",
                    content: "Samstarf okkar við Panda Game Manufacturing er staðfest. Sama fyrirtæki og framleið Scythe og Wingspan mun koma Náttúruvali til lífs!",
                    type: "production",
                    status: ""
                },
                {
                    date: "Október 2024",
                    title: "Ný listaverk opinberuð",
                    content: "Kate Estrop hefur lokið við listaverk fyrir 50 viðbótar dýraspil! Kíktu á falleg myndin á Gamefound síðunni okkar.",
                    type: "art",
                    status: ""
                },
                {
                    date: "September 2024",
                    title: "Herferðaropnun",
                    content: "Hópfjármögnunarherferð Náttúruvals er nú í gangi á Gamefound! Snemma fugl verðlagning í boði fyrstu 48 klukkustundirnar.",
                    type: "launch",
                    status: ""
                },
                {
                    date: "Ágúst 2024",
                    title: "Beta prófunum lokið",
                    content: "Lokaumferð leikprófana lokið með fjölskyldum víða um Ísland og Boston. Jafnvægi leiks og reglur hafa verið frágengnar.",
                    type: "development",
                    status: ""
                }
            ],
            types: {
                milestone: { color: "success", icon: "🎉" },
                production: { color: "primary", icon: "🏭" },
                art: { color: "info", icon: "🎨" },
                launch: { color: "warning", icon: "🚀" },
                development: { color: "secondary", icon: "🔧" }
            }
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    return (
        <section className="news-updates py-5 bg-light" id="news">
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
                    <Col lg={10} className="mx-auto">
                        <div className="timeline">
                            {text.news.map((item, index) => (
                                <Card key={index} className="mb-4 border-0 shadow-sm rounded">
                                    <Card.Body>
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 me-3">
                                                <div 
                                                    className={`rounded-circle bg-${text.types[item.type].color} text-white d-flex align-items-center justify-content-center`}
                                                    style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}
                                                >
                                                    {text.types[item.type].icon}
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <h5 className="mb-1">
                                                        {item.title}
                                                        {item.status === 'new' && (
                                                            <Badge bg="danger" className="ms-2 animate__animated animate__pulse rounded">
                                                                {lang === 'en' ? 'NEW' : 'NÝTT'}
                                                            </Badge>
                                                        )}
                                                    </h5>
                                                    <small className="text-muted">{item.date}</small>
                                                </div>
                                                <p className="mb-2 text-start">{item.content}</p>
                                                <Badge bg={text.types[item.type].color} variant="light" className="rounded">
                                                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                                </Badge>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NewsUpdates;
