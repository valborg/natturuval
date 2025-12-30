import React, { useState, useMemo, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import dice from '../../public/Offspring.svg';
import cardData from '../16nov2024card_data.json';

const CardInfo = ({ currLang }) => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [displayedAnimals, setDisplayedAnimals] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [allShuffledAnimals, setAllShuffledAnimals] = useState([]);
    const [previewAnimals, setPreviewAnimals] = useState([]);
    const [showingPreview, setShowingPreview] = useState(false);

    const ANIMALS_PER_PAGE = 4;

    // Calculate min/max values for each attribute across the entire deck
    const attributeRanges = useMemo(() => {
        const ranges = {
            offspring: { min: Infinity, max: -Infinity },
            lifetime: { min: Infinity, max: -Infinity },
            feet: { min: Infinity, max: -Infinity },
            weight: { min: Infinity, max: -Infinity },
            length: { min: Infinity, max: -Infinity },
            nameLength: { min: Infinity, max: -Infinity }
        };

        cardData.forEach(animal => {
            // Use avg if available, otherwise use min/max average, or just the available value
            const offspring = animal.offspring_avg || ((animal.offspring_min || 0) + (animal.offspring_max || 0)) / 2 || animal.offspring_min || animal.offspring_max || 0;
            const lifetime = animal.lifetime_avg || ((animal.lifetime_min || 0) + (animal.lifetime_max || 0)) / 2 || animal.lifetime_min || animal.lifetime_max || 0;
            const feet = animal.feet_avg || animal.feet_min || animal.feet_max || 0;
            const weight = animal.weight_avg || ((animal.weight_min || 0) + (animal.weight_max || 0)) / 2 || animal.weight_min || animal.weight_max || 0;
            const length = animal.length_avg || ((animal.length_min || 0) + (animal.length_max || 0)) / 2 || animal.length_min || animal.length_max || 0;
            const nameLength = animal.name_sci ? animal.name_sci.length : 0;

            if (offspring > 0) {
                ranges.offspring.min = Math.min(ranges.offspring.min, offspring);
                ranges.offspring.max = Math.max(ranges.offspring.max, offspring);
            }
            if (lifetime > 0) {
                ranges.lifetime.min = Math.min(ranges.lifetime.min, lifetime);
                ranges.lifetime.max = Math.max(ranges.lifetime.max, lifetime);
            }
            if (feet > 0) {
                ranges.feet.min = Math.min(ranges.feet.min, feet);
                ranges.feet.max = Math.max(ranges.feet.max, feet);
            }
            if (weight > 0) {
                ranges.weight.min = Math.min(ranges.weight.min, weight);
                ranges.weight.max = Math.max(ranges.weight.max, weight);
            }
            if (length > 0) {
                ranges.length.min = Math.min(ranges.length.min, length);
                ranges.length.max = Math.max(ranges.length.max, length);
            }
            if (nameLength > 0) {
                ranges.nameLength.min = Math.min(ranges.nameLength.min, nameLength);
                ranges.nameLength.max = Math.max(ranges.nameLength.max, nameLength);
            }
        });

        return ranges;
    }, []);

    // Convert card data to usable format - only include animals with valid photo URLs
    const processedAnimals = useMemo(() => {
        return cardData
            .filter(animal => {
                // Only include animals that have a valid photo_url (direct image URL)
                return animal.photo_url && 
                       animal.photo_url.trim() && 
                       animal.photo_url.includes('http') &&
                       (animal.photo_url.includes('.jpg') || 
                        animal.photo_url.includes('.jpeg') || 
                        animal.photo_url.includes('.png') || 
                        animal.photo_url.includes('.webp'));
            })
            .map(animal => {
                const offspring = animal.offspring_avg || ((animal.offspring_min || 0) + (animal.offspring_max || 0)) / 2 || animal.offspring_min || animal.offspring_max || 0;
                const lifetime = animal.lifetime_avg || ((animal.lifetime_min || 0) + (animal.lifetime_max || 0)) / 2 || animal.lifetime_min || animal.lifetime_max || 0;
                const feet = animal.feet_avg || animal.feet_min || animal.feet_max || 0;
                const weight = animal.weight_avg || ((animal.weight_min || 0) + (animal.weight_max || 0)) / 2 || animal.weight_min || animal.weight_max || 0;
                const length = animal.length_avg || ((animal.length_min || 0) + (animal.length_max || 0)) / 2 || animal.length_min || animal.length_max || 0;
                const nameLength = animal.name_sci ? animal.name_sci.length : 0;            return {
                id: animal.number,
                name: currLang === 'en' ? animal.name_en : animal.name_is,
                scientificName: animal.name_sci,
                image: animal.photo_url,
                photoCredit: animal.photo_credit,
                funFacts: animal.fun_facts, // Include fun facts if available
                stats: {
                    offspring,
                    lifetime,
                    feet,
                    weight,
                    length,
                    nameLength
                }
            };
            });
    }, [currLang]);

    // Initialize shuffled animals and displayed animals
    useEffect(() => {
        const shuffled = [...processedAnimals].sort(() => Math.random() - 0.5);
        setAllShuffledAnimals(shuffled);
        setDisplayedAnimals(shuffled.slice(0, ANIMALS_PER_PAGE));
        setCurrentIndex(ANIMALS_PER_PAGE);
        setPreviewAnimals([]);
        setShowingPreview(false);
    }, [processedAnimals]);

    const showMoreAnimals = () => {
        // Simply show the next batch of 4 animals
        const nextAnimals = allShuffledAnimals.slice(currentIndex, currentIndex + ANIMALS_PER_PAGE);
        setDisplayedAnimals(prevAnimals => [...prevAnimals, ...nextAnimals]);
        setCurrentIndex(prevIndex => prevIndex + ANIMALS_PER_PAGE);
    };

    const content = {
        en: {
            title: "Card Information",
            subtitle: "Explore the animals in our game",
            searchPlaceholder: "Search for an animal...",
            categories: ["Length", "Lifetime", "Offspring", "Legs", "Weight", "Name Length"],
            modalTitle: "Animal Details",
            close: "Close",
            noResults: "No animals found matching your search.",
            showMore: "Show More",
            funFacts: "Fun Facts"
        },
        is: {
            title: "Spilupplýsingar",
            subtitle: "Kannaðu dýrin í leiknum okkar",
            searchPlaceholder: "Leitaðu að dýri...",
            categories: ["Lengd", "Líftími", "Afkvæmi", "Fætur", "Þyngd", "Nafnalengd"],
            modalTitle: "Dýraupplýsingar",
            close: "Loka",
            noResults: "Engin dýr fundust sem passa við leitina þína.",
            showMore: "Sýna fleiri",
            funFacts: "Skemmtilegar staðreyndir"
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    const filteredAnimals = searchTerm 
        ? processedAnimals.filter(animal =>
            animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : displayedAnimals;

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
        setShowModal(true);
    };

    // Calculate logarithmic circle rating (1-5 circles)
    const calculateCircleRating = (value, attributeType) => {
        const range = attributeRanges[attributeType];
        if (!range || value <= 0 || range.min >= range.max) return 0;
        
        // Use logarithmic scale for better distribution
        const logMin = Math.log(range.min);
        const logMax = Math.log(range.max);
        const logValue = Math.log(value);
        
        const normalizedValue = (logValue - logMin) / (logMax - logMin);
        return Math.min(Math.max(Math.ceil(normalizedValue * 5), 0), 5);
    };

    const StatRow = ({ value, attributeType, label }) => {
        const rating = calculateCircleRating(value, attributeType);
        
        // Define gradient green colors for each rating level
        const getCircleColor = (level, isFilled) => {
            if (!isFilled) return { backgroundColor: 'transparent', borderColor: '#dee2e6' };
            
            switch (level) {
                case 1: return { backgroundColor: '#c3f0ca', borderColor: '#a3d9a3' };
                case 2: return { backgroundColor: '#8bc998', borderColor: '#74b07b' };
                case 3: return { backgroundColor: '#52a366', borderColor: '#459954' };
                case 4: return { backgroundColor: '#2d8f47', borderColor: '#25753a' };
                case 5: return { backgroundColor: '#198754', borderColor: '#146c43' };
                default: return { backgroundColor: '#198754', borderColor: '#146c43' };
            }
        };
        
        return (
            <div className="mb-2 d-flex align-items-center">
                {/* Left side - attribute name, fixed width to align icons */}
                <div style={{ width: '120px' }}>
                    <span>{label}</span>
                </div>
                
                {/* Middle - icon in fixed position */}
                <div className="me-2">
                    <img src={dice} width="16" height="16" alt="dice" />
                </div>
                
                {/* Value aligned with icon */}
                <div className="me-auto">
                    <span className="fw-medium">{value}</span>
                </div>
                
                {/* Right side - rating circles */}
                <div className="d-flex align-items-center">
                    {[1, 2, 3, 4, 5].map(circle => {
                        const isFilled = circle <= rating;
                        const colors = getCircleColor(circle, isFilled);
                        return (
                            <div
                                key={circle}
                                className="rating-circle me-1"
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    border: `1px solid ${colors.borderColor}`,
                                    backgroundColor: colors.backgroundColor,
                                    opacity: 0.7
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    const CircleRating = ({ value, attributeType, label }) => {
        const rating = calculateCircleRating(value, attributeType);
        
        // Define gradient green colors for each rating level
        const getCircleColor = (level, isFilled) => {
            if (!isFilled) return { backgroundColor: 'transparent', borderColor: '#dee2e6' };
            
            switch (level) {
                case 1: return { backgroundColor: '#c3f0ca', borderColor: '#a3d9a3' }; // Very light green
                case 2: return { backgroundColor: '#8bc998', borderColor: '#74b07b' }; // Light green
                case 3: return { backgroundColor: '#52a366', borderColor: '#459954' }; // Medium green
                case 4: return { backgroundColor: '#2d8f47', borderColor: '#25753a' }; // Dark green
                case 5: return { backgroundColor: '#198754', borderColor: '#146c43' }; // Darkest green
                default: return { backgroundColor: '#198754', borderColor: '#146c43' };
            }
        };
        
        return (
            <div className="mb-2">
                <div className="small mb-1 text-muted fw-medium">
                    <span>{label}</span>
                </div>
                <div className="d-flex align-items-center">
                    {[1, 2, 3, 4, 5].map(circle => {
                        const isFilled = circle <= rating;
                        const colors = getCircleColor(circle, isFilled);
                        return (
                            <div
                                key={circle}
                                className={`rating-circle me-1 ${isFilled ? 'filled' : ''} level-${circle}`}
                                style={{
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    border: `2px solid ${colors.borderColor}`,
                                    backgroundColor: colors.backgroundColor,
                                    transition: 'all 0.3s ease',
                                    transform: isFilled ? 'scale(1.1)' : 'scale(1)',
                                    boxShadow: isFilled ? `0 2px 6px ${colors.backgroundColor}66` : '0 1px 3px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <section className="card-info py-5" id="cards">
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
                        <Form.Group className="mb-4">
                            <Form.Control
                                type="text"
                                placeholder={text.searchPlaceholder}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                size="lg"
                                className="text-center rounded"
                            />
                        </Form.Group>

                        {filteredAnimals.length === 0 ? (
                            <div className="text-center py-5">
                                <p className="text-muted">{text.noResults}</p>
                            </div>
                        ) : (
                            <Row>
                                {filteredAnimals.map((animal, index) => (
                                    <Col key={animal.id} md={6} lg={3} className="mb-4">
                                        <Card 
                                            className="h-100 card-hover border-0 shadow-sm rounded"
                                            role="button"
                                            onClick={() => handleAnimalClick(animal)}
                                        >
                                            <Card.Img 
                                                variant="top"
                                                src={animal.image}
                                                className="rounded-top"
                                                style={{ height: '200px', objectFit: 'cover' }}
                                                alt={animal.name}
                                            />
                                            <Card.Body>
                                                <Card.Title className="h6 mb-3">{animal.name}</Card.Title>
                                                
                                                <Row>
                                                    <Col xs={6}>
                                                        {/* Left side: Name Length, Offspring, Lifespan */}
                                                        <CircleRating 
                                                            value={animal.stats.nameLength} 
                                                            attributeType="nameLength" 
                                                            label={text.categories[5]}
                                                        />
                                                        <CircleRating 
                                                            value={animal.stats.offspring} 
                                                            attributeType="offspring" 
                                                            label={text.categories[2]}
                                                        />
                                                        <CircleRating 
                                                            value={animal.stats.lifetime} 
                                                            attributeType="lifetime" 
                                                            label={text.categories[1]}
                                                        />
                                                    </Col>
                                                    <Col xs={6}>
                                                        {/* Right side: Length, Feet, Weight */}
                                                        <CircleRating 
                                                            value={animal.stats.length} 
                                                            attributeType="length" 
                                                            label={text.categories[0]}
                                                        />
                                                        <CircleRating 
                                                            value={animal.stats.feet} 
                                                            attributeType="feet" 
                                                            label={text.categories[3]}
                                                        />
                                                        <CircleRating 
                                                            value={animal.stats.weight} 
                                                            attributeType="weight" 
                                                            label={text.categories[4]}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        )}

                        {/* Show More Button */}
                        {!searchTerm && currentIndex < allShuffledAnimals.length && (
                            <Row>
                                <Col xs={12} className="text-center mt-4">
                                    <Button 
                                        variant="outline-success"
                                        onClick={showMoreAnimals}
                                        className="rounded"
                                        size="lg"
                                    >
                                        {text.showMore}
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>

                <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                    {selectedAnimal && (
                        <>
                            <Modal.Header closeButton className="bg-success text-white rounded-top">
                                <Modal.Title>{text.modalTitle}: {selectedAnimal.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col md={6}>
                                        <img 
                                            src={selectedAnimal.image} 
                                            alt={selectedAnimal.name}
                                            className="img-fluid rounded mb-3"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                        {selectedAnimal.photoCredit && (
                                            <p className="small text-muted" style={{ fontSize: '0.75rem' }}>
                                                Photo: {selectedAnimal.photoCredit}
                                            </p>
                                        )}
                                    </Col>
                                    <Col md={6}>
                                        <h5>{selectedAnimal.name}</h5>
                                        <p className="text-muted mb-3 text-start">
                                            <em>{selectedAnimal.scientificName}</em>
                                        </p>
                                        
                                        <h6>{lang === 'en' ? 'Game Statistics:' : 'Leiktölfræði:'}</h6>
                                        <div className="text-start">
                                            <StatRow 
                                                value={selectedAnimal.stats.nameLength} 
                                                attributeType="nameLength" 
                                                label={text.categories[5]}
                                            />
                                            <StatRow 
                                                value={selectedAnimal.stats.offspring} 
                                                attributeType="offspring" 
                                                label={text.categories[2]}
                                            />
                                            <StatRow 
                                                value={selectedAnimal.stats.lifetime} 
                                                attributeType="lifetime" 
                                                label={text.categories[1]}
                                            />
                                            <StatRow 
                                                value={selectedAnimal.stats.length} 
                                                attributeType="length" 
                                                label={text.categories[0]}
                                            />
                                            <StatRow 
                                                value={selectedAnimal.stats.feet} 
                                                attributeType="feet" 
                                                label={text.categories[3]}
                                            />
                                            <StatRow 
                                                value={selectedAnimal.stats.weight} 
                                                attributeType="weight" 
                                                label={text.categories[4]}
                                            />
                                        </div>
                                        
                                        {/* Fun Facts Section - only show if fun facts exist */}
                                        {selectedAnimal.funFacts && selectedAnimal.funFacts.length > 0 && (
                                            <div className="mt-4">
                                                <h6>{text.funFacts}</h6>
                                                <ul className="list-unstyled">
                                                    {selectedAnimal.funFacts.map((fact, index) => (
                                                        <li key={index} className="mb-2 text-start">
                                                            <span className="text-muted">•</span> {fact}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(false)} className="rounded">
                                    {text.close}
                                </Button>
                            </Modal.Footer>
                        </>
                    )}
                </Modal>
            </Container>

            <style jsx>{`
                .card-hover {
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                    cursor: pointer;
                }
                .card-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
                }
                .rating-circle {
                    transition: all 0.2s ease;
                }
            `}</style>
        </section>
    );
};

export default CardInfo;
