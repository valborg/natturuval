import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToAction = ({ gamefoundurl }) => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col xs={12} className="px-3">
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="outline-success"
                            onClick={() => window.open(gamefoundurl)}
                            className="rounded btn"
                            style={{
                                color: 'black',
                                borderColor: '#198754',
                                minWidth: '200px',
                                width: '100%',
                                maxWidth: '600px',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                padding: '12px 24px',
                                textAlign: 'center'
                            }}
                        >
                            <span name="textstring" className="call_to_action_button_text_1"></span>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CallToAction;
