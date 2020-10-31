import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';

// These imports will need to be revised - they are being pulled over from the book search project

import { useMutation } from '@apollo/react-hooks';
// import { SAVE_BOOK } from '../utils/mutations';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

import styles from '../index.css';

import Auth from '../utils/auth';



const ZenQuotes = () => {

    const [quote,setQuote] = useState('');
    const [loading,setLoading] = useState(true);
    const [author,setAuthor]= useState('');

    useEffect(()=>{
        // fetch('https://quotes.rest/qod.json?category=inspire')
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://zenquotes.io/api/random';
        fetch(proxyurl + url)
        .then(res=> res.json())
        .then(data=>{
        console.log(data);

        setQuote(data.contents.array[1].q);
        setAuthor(data.contents.array[1].a);

    })
    },[])

    return (
        <div className="d-flex justify-content-center">
        
        <Container fluid className="d-flex">
            <Row className="main-panel">
                       
                <h2>ZenQuotes</h2>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h1><em>{quote}</em></h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p><h3>- {author}</h3></p>
                
            </Row>
        </Container>
        </div>
    )
};


export default ZenQuotes;
