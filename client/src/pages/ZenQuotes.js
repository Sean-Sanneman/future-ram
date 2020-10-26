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
            
            
                <h2>So this is where we will drop in the daily zen quotes:</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>Cheesecake rubber cheese rubber cheese. <p></p>Camembert de normandie jarlsberg croque monsieur swiss cow lancashire fondue rubber cheese.
                     Fondue gouda dolcelatte roquefort fromage frais cheesecake goat hard cheese. 
                     Rubber cheese manchego cheese on toast lancashire cheeseburger dolcelatte pepper jack when the cheese comes out everybody's happy.
                     Cow fromage frais cheese strings blue castello cut the cheese who moved my cheese roquefort cottage cheese.</h4>
                
            </Row>
        </Container>
        </div>
    )
};


export default ZenQuotes;
