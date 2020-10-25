import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import ZenQuotes from './pages/ZenQuotes';
import Diary from './pages/Diary';
import Goals from './pages/Goals';
import Messages from './pages/Messages';
import Contact from './pages/Contact';
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
                <Switch>
                  <Route exact path='/diary' component={Diary} />
                  <Route exact path='/goals' component={Goals} />
                  <Route exact path='/zenquotes' component={ZenQuotes} />
                  <Route exact path='/messages' component={Messages} />
                  <Route exact path='/contact' component={Contact} />
                  <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
                </Switch>
              </Col>
              <Container>
                <Col xs={11} className="col-xs-offset-3">
                  <ZenQuotes />
                  <Diary />
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
