import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import storyRokkvi from '../../public/rokkvi12.jpeg';
import basicLayout from '../../public/basicLayout.jpg';
import prototypeArt from '../../public/prototypeArt.jpg';
import grass from '../../public/GrassPattern.svg';
import lifeIcon from '../../public/Lifespan.svg';

const History = ({ currLang }) => {
    const content = {
        en: {
            title: "The story behind the game",
            history_origin: "Rökkvi Þór, who's favorite scientist is Sir David Frederick Attenborough, asked his mother Valborg one day to create \\\"little cards\\\" with information about animals. Valborg started collecting data about the animals he wanted to learn about. Mind you this kid has always been interested in animals and at age six in a game of twenty questions thought about the Atlantic fur seal. The datapoints were to be numerical, like length, wingspan, weight, average amount of sleep, distance traveled, speed, amount of eyes and other things that were measurable. But the stats needed to be collectable for all animals so many of those categories were unrealistic (or uninteresting like the amount of eyes).",
            history_decisions: "The categories that were chosen were the length of an adult head to toe, average amount of offspring at a time, and average lifespan in the wild. Subsequently two easily acquired categories were introduced. Both because then you could roll a six sided die to randomly select a category and because a 4 sided die did not exist in the home at that point. Those were the amount of legs the creature has (of a healthy adult, the average amount would always be lower) and how many letters are in its scientific name. At that point they started printing out cards, pictures with CC licences, and started playing. They didn't have more than 13 cards when they had multiple ways of playing. Then slowly they added more cards, 9 at a time to fill one A4 sheet of paper.",
            history_version_1: "One day Justin and his wife came over for a visit from the US and Rökkvi showed them the game. Justin thought it had a lot of potential in spite the raw inkscape design. So when he went back home to Boston he decided to improve on the design thoroughly and print a prototype in English and Icelandic. He sent a copy to the duo in Iceland. However the prototype with that printer would have been too costly for general release, and the idea was shelved. Justin didn't give up so easily and contacted another trusted printer which gave us the ability to retail the game at a much more reasonable price, though with the tradeoff of making many more copies at once. That's when he said that a commercial product needed commercial-quality artwork, and that they should consult a professional. That is how Kate got involved and elevated the project to great heights with their fantastic art and design skills.",
        },
        is: {
            title: "Sagan á bak við spilið",
            history_origin: "Rökkvi Þór, sem lítur mjög upp til Sir David Frederick Attenborough, bað móður sína, Valborgu, um að gera lítil spjöld með upplýsingum um dýr. Valborg tók strax að safna upplýsingum um dýrin sem hann bað um. Rétt er að nefna að hann hefur alltaf haft mikinn áhuga á dýrum. Þegar hann var 6 ára og tók þátt í leiknum; Gettu hvað ég er að hugsa, þá hugsaði hann um Georgíu loðsel. Upplýsingarnar á spjöldunum áttu að vera tölulegs eðlis, eins og lengd, vænghaf, þyngd, hraði, meðal svefntími, augnafjöldi, fjarlægðir sem dýrið ferðast að staðaldri og aðrar staðreyndir sem hægt væri að mæla. En hugmyndin var að safna alltaf öllum upplýsingunum fyrir hvert dýr, en þá urðu margir þessara flokka óraunhæfir eða óáhugaverðir (eins og fjöldi augna).",
            history_decisions: "Þeir flokkar sem urðu á endanum fyrir valinu voru þyngd, lengd fá toppi til táar, fjöldi afkvæma í einu og meðallíftími í náttúrunni. Í kjölfarið var tveimur skemmtilegum flokkum  bætt við. Bæði vegna þess að þá væri hægt að kasta venjulegum teningi til að velja hvaða flokk ætti að skoða og vegna þess að fjögurra hliða teningur var ekki til á heimilinu. Þessir tveir flokkar voru fjöldi fóta (ekki meðaltalið, því það er alltaf minna en sá fjöldi sem á að vera til staðar vegna þess að fá dýr eru með of marga fætur) og fjöldi bókstafa í fræðiheiti dýrsins. Þegar búið var að bæta þessum tveimur flokkum við, var hægt að prenta og byrja að spila. Í byrjun voru spilin ekki nema 13. En eftir að hafa spilað í stórum og minni hópum með fjölbreyttum reglum, ákváðu þau að bæta fleiri dýrum í stokkinn.",
            history_version_1: "Einn daginn komu Justin og eiginkona hans í heimsókn til Íslands, til þeirra mæðgina, frá Bandaríkjunum. Þau fengu að prófa spilið og Justin fannst miklir möguleikar felast í því þrátt fyrir hráa og einfalda inkscape hönnun. Justin fór svo heim til Boston og ákvað að betrumbæta hönnunina töluvert og prenta eintök af spilinu á ensku og íslensku. Sú prentun var ekki fýsilegur möguleiki í smásölu og því sá draumur að engu orðinn. Justin gafst ekki upp heldur hafði samband við annan traustan prentara sem gerði okkur kleift að selja spilið á viðráðanlegu verði, en einungis ef stórt upplag yrði prentað. Honum fannst mikilvægt að söluvara eins og þessi þyrfti faglega hönnun og þannig bættist Kate í hópinn. Hönnun Kate lyftir verkefninu vissulega á hærra plan.",

        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    return (
        <section className='App-history bg-light py-5' id="history">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} className="text-center">
                        <div className="section-heading-container d-inline-flex align-items-center">
                            <h2 className="mb-0 text-success border border-success rounded px-3 py-2  d-flex align-items-center">
                                {text.title}
                                <img src={lifeIcon} width="24" height="24" alt="lifespan" className="me-2" />
                            </h2>
                        </div>
                    </Col>
                </Row>
                <div className="firstHistory">
                    <Row className="align-items-center mb-4">
                        <Col xs={12} md={4} className="mb-4 mb-md-0">
                            <img src={storyRokkvi} className="img-fluid rounded shadow" style={{ maxHeight: '300px', objectFit: 'cover' }} alt="old-card-1.0" />
                        </Col>
                        <Col xs={12} md={8}>
                            <p className="history_origin text-start">{text.history_origin}</p>
                        </Col>
                    </Row>

                    <div className="text-center my-4">
                        <img src={grass} className="img-fluid" style={{ height: '50px', width: '100%' }} alt="grassy pattern" />
                    </div>

                    <Row className="align-items-center mb-4">
                        <Col xs={12} md={4} className="order-md-2 mb-4 mb-md-0">
                            <img src={basicLayout} className="img-fluid rounded shadow" style={{ maxHeight: '300px', objectFit: 'cover' }} alt="old-card-2.0" />
                        </Col>
                        <Col xs={12} md={8} className="order-md-1">
                            <p className="history_decisions text-start">{text.history_decisions}</p>
                        </Col>
                    </Row>

                    <div className="text-center my-4">
                        <img src={grass} className="img-fluid img-flip" style={{ height: '50px', width: '100%' }} alt="grassy pattern" />
                    </div>

                    <Row className='align-items-center'>
                        <Col xs={12} md={4} className="mb-4 mb-md-0">
                            <img src={prototypeArt} className="img-fluid rounded shadow" style={{ maxHeight: '300px', objectFit: 'cover' }} alt="prototype art" />
                        </Col>
                        <Col xs={12} md={8}>
                            <p className="history_version_1 text-start">{text.history_version_1}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default History;
