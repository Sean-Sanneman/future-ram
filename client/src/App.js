import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import ZenQuotes from './pages/ZenQuotes';
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
        <section>
          <div>
            
            <Row>
            <Col xs={12}>
            <Banner />
            </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Navbar />
              </Col>
              <Container>

              <Col xs={7} className="col-xs-offset-3">
                <ZenQuotes />
              </Col>
              </Container>
            </Row>
            
          </div>
        </section>
      </Router>
    </ApolloProvider>
  );
};

export default App;
