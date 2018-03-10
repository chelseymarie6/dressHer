import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Navigation from './Navigation';

class Main extends Component {
    render() {
      return (
        <div>
            <Container>
                <Row>
                    <Navigation />
                </Row>
            </Container>
    </div>
    );
  }
}


export default Main;