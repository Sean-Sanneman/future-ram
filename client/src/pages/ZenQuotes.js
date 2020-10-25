import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';

// These imports will need to be revised - they are being pulled over from the book search project

import { useMutation } from '@apollo/react-hooks';
// import { SAVE_BOOK } from '../utils/mutations';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

import styles from '../index.css';

import Auth from '../utils/auth';


const ZenQuotes = () => {
    return (
        <div className="d-flex justify-content-center">
        <Container fluid className="d-flex">
            <Row className="main-panel">
            <Col>1 of 1</Col>
                <h3>So this is where we will drop in the daily zen quotes and other content.</h3>
                <br></br>
                <h4>This is just a placeholder.</h4>
                <h3>So this is where we will drop in the daily zen quotes and other content.</h3>
                <br></br>
                <h4>This is just a placeholder.</h4>
            </Row>
        </Container>
        </div>
    )
};


export default ZenQuotes;
