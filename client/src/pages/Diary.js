import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row, ListGroup, ListGroupItem, ListGroupProps, ListGroupItemProps, Tab, Sonnet } from 'react-bootstrap';

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
            
                <h2>This will be the list of diary entry dates:</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                        <ListGroup.Item action href="#link1">
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                        </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                    <p />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                    <p />
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
