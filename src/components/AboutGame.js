import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import dice from '../../public/SciName.svg';
import CollapsibleSection from './CollapsibleSection';

const TikTokCarousel = ({ videos }) => {
    const scrollRef = React.useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' });
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            {/* Left arrow */}
            <button
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                style={{
                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    zIndex: 10, background: 'rgba(255,255,255,0.9)', border: 'none',
                    borderRadius: '50%', width: '40px', height: '40px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)', cursor: 'pointer',
                    fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
            >‹</button>

            {/* Scroll container */}
            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '16px',
                    padding: '16px 48px',
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {videos.map((video, i) => (
                    <div
                        key={i}
                        style={{
                            flex: '0 0 auto',
                            scrollSnapAlign: 'start',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                    >
                        {video.label && (
                            <span style={{
                                fontSize: '0.85rem', fontWeight: 600,
                                color: '#198754', textAlign: 'center', maxWidth: '325px'
                            }}>
                                {video.label}
                            </span>
                        )}
                        <iframe
                            src={`https://www.tiktok.com/embed/v2/${video.id}`}
                            style={{
                                width: '325px',
                                height: '580px',
                                border: 'none',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                display: 'block',
                            }}
                            allowFullScreen
                            allow="encrypted-media"
                            title={video.label || `TikTok video ${i + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Right arrow */}
            <button
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                style={{
                    position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
                    zIndex: 10, background: 'rgba(255,255,255,0.9)', border: 'none',
                    borderRadius: '50%', width: '40px', height: '40px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)', cursor: 'pointer',
                    fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
            >›</button>

            <style>{`.tiktok-scroll::-webkit-scrollbar { display: none; }`}</style>
        </div>
    );
};

const AboutGame = ({ currLang }) => {
    const content = {
        en: {
            title: "About Náttúruval",
            description: "Náttúruval is a fascinating card game that combines entertainment with education. Players learn about over 100 real animals while competing in an engaging battle of statistics.",
            video: {
                title: "See It in Action",
                videos: [
                    { id: "7381423431465651489", label: "Kids playing Náttúruval" },
                    { id: "7581855143293979926", label: "Unboxing Náttúruval" },
                    { id: "7690928833939262742", label: "Game play explained in Icelandic" },

                ]
            },
            features: [
                {
                    title: "Educational",
                    text: "Based on real scientific data about animals from around the world"
                },
                {
                    title: "Family-Friendly",
                    text: "Perfect for players of all ages to learn and have fun together"
                },
                {
                    title: "Strategic",
                    text: "Choose your battles wisely - different animals excel in different categories"
                },
                {
                    title: "Beautiful Design",
                    text: "Stunning artwork brings each animal to life on the cards"
                }
            ]
        },
        is: {
            title: "Um Náttúruval",
            description: "Náttúruval er heillandi spil sem sameinar skemmtun og nám. Spilarar læra um yfir 100 raunveruleg dýr á meðan þeir keppa í spennandi tölfræðibaráttu.",
            video: {
                title: "Sjáðu leikinn spilaðan",
                videos: [
                    { id: "7690928833939262742", label: "Kynningarmyndband ítarlegar ústkýringar" },
                    { id: "7417164366778354976", label: "Grunnreglurnar" },
                    { id: "7641322473388117271", label: "Nokkrar reglur - stutt yfirferð" },
                    { id: "7381423431465651489", label: "Krakkarnir að spila spilið" },
                    { id: "7581855143293979926", label: "Náttúruval tekið upp"},
                    { id: "7383842430446996768", label: "Hvaða dýr eru þetta???" },
                    { id: "7418755897343642912", label: "Lítill köttur"},
                    { id: "7419648939390979360", label: "❤️ bókasöfn - Sólheimasafn og lítill svindlari" },
                    { id: "7388874220433886496", label: "Grísinn í miðjunni (með stokksspilara!)" },
                    { id: "7418348428943543585", label: "Talþjálfun" },
                    { id: "7411174580938624288", label: "Látbragðsleikur - og einhver vitleysa" },
                    { id: "7386254670605421857", label: "Ég vona að ég vinni - bannað að kíkja!" },
                ]
            },
            features: [
                {
                    title: "Fræðandi",
                    text: "Byggt á raunverulegum vísindagögnum um dýr frá öllum heimshornum"
                },
                {
                    title: "Fjölskylduvænt",
                    text: "Fullkomið fyrir spilara á öllum aldri til að læra og skemmta sér saman"
                },
                {
                    title: "Hugvit og kænska",
                    text: "Veldu bardagana þína skynsamlega - mismunandi dýr skara framúr í mismunandi flokkum"
                },
                {
                    title: "Falleg hönnun",
                    text: "Dýrin vakna til lífs í litmyndum og hönnunin á spilunum spilar þar stórt hlutverk"
                }
            ]
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    return (
        <section className="about-game py-5" id="about">
            <Container>
                <CollapsibleSection defaultOpen={true}>
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
                    {/* <Row className="mb-4">
                        <Col lg={12}>
                            <p className="lead text-start">{text.description}</p>
                        </Col>
                    </Row> */}
                    <Row className="justify-content-center mb-2">
                        <Col xs={12} className="text-center">
                            <h4 className="text-success mb-3">{text.video.title}</h4>
                            <TikTokCarousel videos={text.video.videos} />
                        </Col>
                    </Row>
                    <Row>
                        {text.features.map((feature, index) => (
                            <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                                <Card className="h-100 text-center border-0 shadow-sm rounded">
                                    <Card.Body>
                                        <Card.Title className="h5 text-success">{feature.title}</Card.Title>
                                        <Card.Text className="text-start">{feature.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </CollapsibleSection>
            </Container>
        </section>
    );
};

export default AboutGame;
