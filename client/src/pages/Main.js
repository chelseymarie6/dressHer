import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Navigation from './Navigation';
import Upload from './Upload';

class Main extends Component {
    render() {
      return (
        <div>
            <Container>
                <Row>
                    <Navigation />
                </Row>
            </Container>

            <Container>
                <Row>
                    <Upload />
                </Row>
            </Container>

    </div>
    );
  }
}


export default Main;