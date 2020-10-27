import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Nav, Button, Card, CardColumns, Row, ListGroup, ListGroupItem, ListGroupProps, ListGroupItemProps, Tab, Sonnet } from 'react-bootstrap';

// These imports will need to be revised - they are being pulled over from the book search project

import { useMutation } from '@apollo/react-hooks';
// import { SAVE_BOOK } from '../utils/mutations';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

import styles from '../index.css';

import Auth from '../utils/auth';


const Diary = () => {
    return (
        <div className="d-flex justify-content-center">
        <Container fluid className="d-flex">
            <Row className="main-panel">

            <div className="goalButtons">
                <Nav.Link className='goalMyBtn goalBtnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                New Entry
                </Nav.Link>
                <Nav.Link className='goalMyBtn goalBtnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Edit Entry*
                </Nav.Link>
                <Nav.Link className='goalMyBtn goalBtnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Delete Entry**
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
                            Wednesday, October 28
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Tuesday, October 27
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            Monday, October 26
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                            Sunday, October 25
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5">
                            Saturday, October 24
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link7">
                            Friday, October 23
                        </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                    <h4>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
                    </h4>
                    <p></p>
                    <h4>Qui animated corpse, cricket bat max brucks terribilem incessu zomby. Dark Souls the voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
                        Zonbi tattered for solum oculi eorum defunctis go lum cerebro.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                    <h4>Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.</h4>
                    <p></p>
                    <h4>De apocalypsi gorger omero undead survivor dictum mauris.
                        Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resident evil vultus comedat cerebella viventium.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                    <h4>Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resident evil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. 
                    </h4>
                    <p></p>
                    <h4>Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
                        Zonbi tattered for solum oculi eorum defunctis go lum cerebro.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                    <h4>The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies.
                        Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.       
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                    <h4>Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
                        Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link6">
                    <h4>Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero Resident Evil 5 undead survivor dictum mauris.
                    </h4>
                    <p></p>
                    <h4>Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies.
                    </h4>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link7">
                    <h4>Summus brains sit​​, morbo vel maleficia? De apocalypsi Demons Souls gorger omero undead survivor dictum mauris.
                    </h4>
                    <p></p>
                    <h4>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
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


export default Diary;
