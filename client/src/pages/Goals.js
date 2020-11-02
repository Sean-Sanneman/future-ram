import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Col, Form, Button, ButtonGroup, Card, CardColumns, Row, ListGroup, ListGroupItem, ListGroupProps, ListGroupItemProps, Tab, Nav } from 'react-bootstrap';
// These imports will need to be revised - they are being pulled over from the book search project

import { useMutation } from '@apollo/react-hooks';
// import { SAVE_BOOK } from '../utils/mutations';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

import styles from '../index.css';

import Auth from '../utils/auth';


const Goals = () => {
    return (
        <div className="d-flex justify-content-center">
        <Container fluid className="d-flex">
            <Row className="main-panel">

                <div className="goalButtons">
                <Nav.Link className='goalMyBtn goalBtnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Add Goal
                </Nav.Link>
                <Nav.Link className='goalMyBtn goalBtnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Edit Goal
                </Nav.Link>
                <Nav.Link className='goalMyBtn goalBtnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Delete Goal
                </Nav.Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
           
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                        <ListGroup.Item action href="#link1">
                            Goal 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Goal 2
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            Goal 3
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                            Goal 4
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5">
                            Goal 5
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link6">
                            Goal 6
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link7">
                            Goal 7
                        </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                    <h4>Become self-made billionaire by 2022 by creating the most mind-blowing apps on Earth.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                    <h4>Travel to Mars, become first DJ in space. Build first greenhouse on Martian surface.</h4> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                    <h4>Open first (and bestest) nightclub on Martian surface. Create currency-less economy.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                    <h4>In case Mars goal not achieved (yet!), travel to every single country on Earth by 2030.       
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                    <h4>Design GUI for solar-powered car in collaboration with new friend Elon Musk.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link6">
                    <h4>Invent teleportation (as long as there is an internet connection).
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link7">
                    <h4>Finally catch-up on sleep. My circadian rhythms are f#*cked!
                    </h4>
                        </Tab.Pane>
                        </Tab.Content>
                        </Col>
                </Row>
                </Tab.Container>
                </Row>
                </Container>
        </div>
    )
};


export default Goals;