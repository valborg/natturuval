import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import dice from '../../public/Weight.svg';
import CollapsibleSection from './CollapsibleSection';

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
                    date: "June 2026",
                    title: "Deliveries Completed 📦 ",
                    content: "We have now done three events in Reykjavík to deliver the game to backers, also to showcase it, and sell it. In the coming days, we will reach out to those who have not been able to pick up their copy to find a solution. We want to thank all our backers for their support and patience, and we are very happy to have been able to deliver the game at this time. ☀️ Summer game of the year, don't forget to take it with you on vacation! 🏖️",
                    type: "update",
                    isNew: true
                },
                {
                    date: "May 2026",
                    title: "Delivery in Nexus Glæsibær! 🎉",
                    content: "Today, May 3rd, we will be handing out to backers their pledges in Nexus in Glæsibær and it will also be available for sale in Nexus from now on.",
                    type: "milestone",
                    isNew: false
                },
                {
                    date: "March 2026",
                    title: "First contact 👽",
                    content: "The first box has been delivered to a backer and we are on our way to fulfill it all before summer starts.",
                    fullContent: "We were lying if we said we didn't expected this sooner but this reminds us of the old adage 'The best time to ship games was twenty years ago, the next best time is today'. This was solely in the US and the deliveries in Icland and EU are arriving soon. ",
                    type: "steppingStone",
                    isNew: false
                },
               {
                date: "March 2026",
                title: "Inaccuracies and how to forgive them 🪰",
                content: "There were two unfortunate errors that made it into the deck, and we hope it is forgiven because of how easy it is to spot them. First is the artic tern whom we fattened up a bit too much, or 900gr instead of 90gr but the card does point to it's upper limit of 120gr. The other is the housefly, the lightest animal in the deck, so light in fact that you'd have to be a scientist to be writing down its weight and hence it got auto corrected into the exponential form, the number still stands it just stands a bit more scientificly",
                type: "development",
                isNew: false
               },
                               {
                    date: "December 2025",
                    title: "Campaign Milestone Reached!",
                    content: "We've gotten a final confirmation from Panda Game Manufacturing about our printing schedule.",
                    fullContent: "We've gotten a final confirmation from Panda Game Manufacturing about the fulfillment of the order. They are certain they will have all boxes assembeled and ready for shipping in the middle of January 2026, and from there it will get shipped to us. Separately to USA and Iceland. We do not have the estimate for when the shipment arrives or how long it will take to clear customs. As soon as we fo hear anything we will let all our backers know, and keep anyone interested updated.",
                    type: "milestone",
                    isNew: false
                },
            ],
            types: {
                milestone: { color: "success", icon: "🎉" },
                production: { color: "primary", icon: "🏭" },
                art: { color: "info", icon: "🎨" },
                launch: { color: "warning", icon: "🚀" },
                development: { color: "secondary", icon: "🔧" },
                steppingStone: { color: "info", icon: "🐦" }
            }
        },
        is: {
            title: "Fréttir og uppfærslur",
            subtitle: "Haltu þér upplýstum um það nýjasta frá Náttúruvali",
            news: [
                { 
                    date: "Júní 2026",
                    title: "Búið að afhenda pantanir (aha aha) 📦 ",
                    content: "Nú erum við búin að halda þrjá viðburði til að afhenda bakhjörlum spilið, sýna og segja frá og selja. Á næstu dögum munum við hafa samband við þau sem hafa ekki getað sótt sér sitt eintak til að finna lausn á því. Við viljum þakka öllum bakhjörlum okkar fyrir stuðninginn og þolinmæðina, við erum mjög ánægð með að hafa getað afhent spilið á þessum tíma. ☀️ Sumarspil ársins, ekki gleyma að taka það með í fríið! 🏖️",
                    type: "varða",
                    isNew: true
                },
                {
                    date: "Maí 2026",
                    title: "Afhending í Nexus! 🎉",
                    content: "Komið í dag, 3. maí, og fáið afhent eða kaupið eintak af Náttúruval í Nexus Glæsibæ milli klukkan 14 og 16.",
                    type: "áfangi",
                    isNew: false
                },
                {
                    date: "Mars 2026",
                    title: "Þá er fyrsta spilið afhent 😻",
                    content: "Fyrsta spilið hefur verið afhent bakhjarli og við ætlum að afhenda allt sem við getum áður sumarið byrjar.",
                    fullContent: "Við værum að ljúga ef við segðum ekki hafa búist við þessu fyrr en þetta minnir okkur á gamla máltækið 'Besti tíminn til að afhenda leiki var fyrir tuttugu árum, næsti besti tíminn er í dag'. Þetta var eingöngu í Bandaríkjunum og sendingarnar til Íslands og ESB að koma fljótlega úr tollafgreiðslu í Reykjavík.",
                    type: "varða",
                    isNew: false
                },
                {
                    date: "Mars 2026",
                    title: "Hvimleiðar innsláttavillur 🪰 ",
                    content: "Innsláttavillur hrjá okkur öll og tvö dýr eru hlunnfarin!",
                    fullContent: "Húsflugan og krían komumst í gegnum nálaraugað, flugan með vitlaust form á tölunni en rétta tölu og krían greyið er heldur feit greyið ekki 90gr heldur 900gr en það sést kannski á tölunum á spjaldinu hennar að það gengur ekki upp því hún getur í mesta lagi verið 120gr 🧐 Vonandi skemma þessar villur ekki fyrir og þið njótið spilsins þrátt fyrir þær. Hitt er húsflugan, léttasta dýrið í stokknum, svo létt að það þarf vísindafólk til að skrifa töluna og hún var því óvart umrituð í flutningum á staðalform, talan er rétt en það er aðeins erfiðara að lesa hana 🤓 Það er auðvelt að skrifa inn á spjöldin tvö rétt gildi til að bæta upp fyrir þetta. Miðað við hversu auðvelt er að lagfæra villunar vonum við að það sé auðvelt að fyrirgefa okkur.",
                    type: "uppgötvun",
                    isNew: false
                },
                                {
                    date: "Desember 2025",
                    title: "Stórum áfanga náð!",
                    content: "Við höfum fengið endanlega staðfestingu frá Panda Game Manufacturing varðandi prentunartímaáætlun okkar.",
                    fullContent: "Við höfum fengið endanlega staðfestingu frá Panda Game Manufacturing varðandi prentunartímaáætlun okkar. Þau eru viss um að allir kassar verði saman settir og tilbúnir til sendingar í miðjum janúar 2026. Þaðan mun það verða sent til okkar, annarsvegar til Íslands og hinsvegar til Bandaríkjana. Við höfum ekki staðfestingu um hvenær sendingin kemur eða hversu lengi það mun taka að komast í gegnum tollinn. Um leið og við fáum einhverjar upplýsingar munum við láta alla bakhjarla okkar vita og halda öllum áhugasömum uppfærðum.",
                    type: "áfangi",
                    isNew: false
                },

            ],
            types: {
                áfangi: { color: "success", icon: "🎉" },
                production: { color: "primary", icon: "🏭" },
                art: { color: "info", icon: "🎨" },
                launch: { color: "warning", icon: "🚀" },
                uppgötvun: { color: "secondary", icon: "🔧" },
                varða: { color: "info", icon: "🐦" }
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
                <CollapsibleSection defaultOpen={false}>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} className="text-center">
                        <div className="section-heading-container">
                            <h2 className="text-success border-success">
                                <img src={dice} width="24" height="24" alt="dice" className="me-2" />
                                {text.title}
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
                                                        {item.isNew && (
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
                </CollapsibleSection>
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
