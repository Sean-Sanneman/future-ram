import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <section class='bacground'>
          <div>
            <Row>
              <Col xs={1}>
                <Navbar />
              </Col>
              <Col xs={11}></Col>
            </Row>
          </div>
        </section>
      </Router>
    </ApolloProvider>
  );
}

export default App;
