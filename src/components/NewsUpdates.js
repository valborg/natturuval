import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import dice from '../../public/Weight.svg';

const NewsUpdates = ({ currLang }) => {
    const [displayedNews, setDisplayedNews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedNews, setExpandedNews] = useState(null);

    const NEWS_PER_PAGE = 2;

    const content = {
        en: {
            title: "News & Updates",
            subtitle: "Stay updated with the latest from Náttúruval",
            news: [
                {
                    date: "December 2025",
                    title: "Campaign Milestone Reached!",
                    content: "We've gotten a final confirmation from Panda Game Manufacturing about our printing schedule.",
                    fullContent: "We've gotten a final confirmation from Panda Game Manufacturing about the fulfillment of the order. They are certain they will have all boxes assembeled and ready for shipping in the middle of January 2026, and from there it will get shipped to us. Separately to USA and Iceland. We do not have the estimate for when the shipment arrives or how long it will take to clear customs. As soon as we fo hear anything we will let all our backers know, and keep anyone interested updated.",
                    type: "milestone",
                    status: "new"
                },
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
                    date: "Desember 2025",
                    title: "Stórum áfanga náð!",
                    content: "Við höfum fengið endanlega staðfestingu frá Panda Game Manufacturing varðandi prentunartímaáætlun okkar.",
                    fullContent: "Við höfum fengið endanlega staðfestingu frá Panda Game Manufacturing varðandi prentunartímaáætlun okkar. Þau eru viss um að allir kassar verði saman settir og tilbúnir til sendingar í miðjum janúar 2026. Þaðan mun það verða sent til okkar, annarsvegar til Íslands og hinsvegar til Bandaríkjana. Við höfum ekki staðfestingu um hvenær sendingin kemur eða hversu lengi það mun taka að komast í gegnum tollinn. Um leið og við fáum einhverjar upplýsingar munum við láta alla bakhjarla okkar vita og halda öllum áhugasömum uppfærðum.",
                    type: "milestone",
                    status: "new"
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

    // Initialize displayed news with first 2 items
    useEffect(() => {
        setDisplayedNews(text.news.slice(0, NEWS_PER_PAGE));
        setCurrentIndex(NEWS_PER_PAGE);
    }, [lang]);

    const showMoreNews = () => {
        const nextNews = text.news.slice(currentIndex, currentIndex + NEWS_PER_PAGE);
        setDisplayedNews(prevNews => [...prevNews, ...nextNews]);
        setCurrentIndex(prevIndex => prevIndex + NEWS_PER_PAGE);
    };

    const toggleNewsExpansion = (index) => {
        setExpandedNews(expandedNews === index ? null : index);
    };

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

                <Row>
                    <Col lg={10} className="mx-auto">
                        <div className="timeline">
                            {displayedNews.map((item, index) => (
                                <Card key={index} className="mb-4 border-0 shadow-sm rounded cursor-pointer" onClick={() => toggleNewsExpansion(index)}>
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
                                                            <Badge bg="danger" className="ms-1 animate__animated animate__pulse rounded" style={{ fontSize: '0.5rem' }}>
                                                                {lang === 'en' ? 'NEW' : 'NÝTT'}
                                                            </Badge>
                                                        )}
                                                    </h5>
                                                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>{item.date}</small>
                                                </div>

                                                <p className="mb-2 text-start">
                                                    {expandedNews === index ? item.fullContent : item.content}
                                                    {expandedNews !== index && item.fullContent && item.fullContent.length > item.content.length && (
                                                        <span className="text-muted">...</span>
                                                    )}
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <Badge bg={text.types[item.type].color} variant="light" className="rounded">
                                                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                                    </Badge>
                                                    {item.fullContent && item.fullContent.length > item.content.length && (
                                                        <small className="text-primary">
                                                            {expandedNews === index ?
                                                                (lang === 'en' ? '-' : '-') :
                                                                (lang === 'en' ? '-' : '+')
                                                            }
                                                        </small>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>

                        {currentIndex < text.news.length && (
                            <div className="text-center mt-4">
                                <Button
                                    variant="outline-success"
                                    onClick={showMoreNews}
                                    className="rounded"
                                >
                                    {lang === 'en' ? 'Load More News' : 'Sýna fleiri fréttir'}
                                </Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .cursor-pointer {
                    cursor: pointer;
                    transition: transform 0.2s ease;
                }
                .cursor-pointer:hover {
                    transform: translateY(-2px);
                }
            `}</style>
        </section>
    );
};

export default NewsUpdates;
