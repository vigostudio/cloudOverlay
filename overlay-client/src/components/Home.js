import React , {useState} from 'react';
import { Card, Button, InputGroup, FormControl, Form, Row , Col, Container} from 'react-bootstrap'
import Playground from './Playground';
// import {  } from 'react-bootstrap/InputGroup';

function handleCreateNewOverlay(e) {
    e.preventDefault();
    console.log(new FormData(e.target).get("width"))
    
}



function Home() {


    return (
        <Container>
            <Row style={{
                marginTop: '20px'
            }}>

                <Col md={12}>
                    <Card>
                        <Card.Body>
                            <h1>
                            Welcome to Cloud Overlay Generator!
                            </h1>
                        
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <Row style={{
                marginTop: '50px'
            }}>
                <Playground id={11102} />
            </Row>

            <Row style={{
                marginTop: '20px'
            }}>
                <Col md={4}>
                    <Form onSubmit={handleCreateNewOverlay}>
                        <Form.Group>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="canvasWidth">Width</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="100px"
                                    aria-label="canvasWidth"
                                    aria-describedby="canvasWidth"
                                    name="width"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="canvasHeight">Height</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="100px"
                                    aria-label="canvasHeight"
                                    name="height"
                                    aria-describedby="canvasHeight"
                                />
                            </InputGroup>
                            <Button variant="primary" type="submit" >
                                New overlay
                    </Button>
                        </Form.Group>
                    </Form>
                </Col>
                
            </Row>

           
            

            

            



        </Container>
    );
}

export default Home;