import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

const ItemCard = (props) => {
  return (
    <div>
      <Container>
        <Row></Row>
        <Row>
          <Col sm={{ size: 'auto'}}>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title Placeholder</CardTitle>
                <CardText>Description Placeholder</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm={{ size: 'auto' }}>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title Placeholder</CardTitle>
                <CardText>Description Placeholder</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm={{ size: 'auto'}}>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title Placeholder</CardTitle>
                <CardText>Description Placeholder</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row></Row>
      </Container>

      
    </div>
  );
};

export default ItemCard;