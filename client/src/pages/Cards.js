import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ItemCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Title Placeholder</CardTitle>
          <CardText>Description Placeholder</CardText>
          <Button>View Details</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemCard;