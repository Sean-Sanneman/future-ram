import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Button } from 'react-bootstrap';
import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';
import styles from './Navbar.css';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar expand='lg'>
        <Container fluid>
          {/* <Navbar.Brand as={Link} to='/'>
            Goals
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='flex-column justify-content-center'>
              {/* <Nav.Link as={Link} to='/'>
                Diary
              </Nav.Link> */}
              {/* if logged in, show saved books and logout */}
              {Auth.loggedIn() ? (
                <>

                  <Nav.Link onClick={Auth.logout} className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>Logout</Nav.Link>
                </>
              ) : (
                  <Nav.Link onClick={() => setShowModal(true)} className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>Login/ Signup</Nav.Link>
                )}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Nav.Link as={Link} to='/' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Goals
              </Nav.Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Nav.Link as={Link} to='/' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Diary
              </Nav.Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Nav.Link as={Link} to='/saved' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Messages
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* modal data */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal' 
        centered>
        {/* signup/login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
