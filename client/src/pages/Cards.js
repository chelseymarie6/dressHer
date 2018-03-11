import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

const ItemCard = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <div></div>
        </Row>
        <Row>
          <Col>
            <Card body inverse color="info">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title Placeholder</CardTitle>
                <CardText>Description Placeholder</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title Placeholder</CardTitle>
                <CardText>Description Placeholder</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>


          <Col>
            <Card>
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