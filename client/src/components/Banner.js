import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Button } from 'react-bootstrap';
import styles from '../index.css';
import logo from '../assets/logo2.png';

const Banner = () => {

    return (
        <>
        <div>
            <Container fluid className='logo-image d-flex justify-content-center'>
                <img src = {logo} width="" height="" alt="Logo"></img>
            </Container>
        </div>
        </>
    )

};

export default Banner;