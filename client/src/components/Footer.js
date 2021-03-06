import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';

// These imports will need to be revised - they are being pulled over from the book search project

import { useMutation } from '@apollo/react-hooks';
// import { SAVE_BOOK } from '../utils/mutations';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

import styles from '../index.css';

import Auth from '../utils/auth';


const Footer = () => {

return (

// 2-Column Footer
    <div className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <h6 className="text-uppercase font-weight-bold">Additional Information</h6>
                    <p>Catty ipsum you have cat to be kitten me right meow, but sleep on dog bed, force dog to sleep on floor, 
                        catch mouse and gave it as a present, my slave human didn't give me any food so i pooped on the floor. </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <p>1640 Riverside Drive, Hill Valley, California
                        <br />info@mywebsite.com
                        <br />+ 01 234 567 88</p>
                </div>
            </div>
            <div className="footer-copyright text-center">© 2020 Copyright: future-RAM.com</div>
        </div>
    </div>

);
};

export default Footer;