import React, { useState, useEffect } from 'react';
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap';

// These imports will need to be revised - they are being pulled over from the book search project

import { useMutation } from '@apollo/react-hooks';
// import { SAVE_BOOK } from '../utils/mutations';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

import styles from '../index.css';


const Messages = () => {
    return (
        <div className="d-flex justify-content-center">
        
        <Container fluid className="d-flex">
            <Row className="main-panel">
                       
                <h2>Messages input fields</h2>
                <br></br>
                <br></br>
                <br></br>
                <p></p><h4>This is where the new Twilio message fields will go:</h4>
                <br></br>
                <br></br>
                <br></br>
                <div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
</div>

            </Row>
        </Container>
        </div>
    );
};

export default Messages;