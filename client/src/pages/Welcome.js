import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron body inverse style={{ backgroundColor: '#48AD8F', borderColor: '#fff' }}>
        <h1 className="display-3">Dress Her</h1>
        <p className="lead">This website helps women donate gently worn business professional clothing to other women in need. Please browse the item cards below.  If you find something you like, click on "Details" to see more information.</p>
        <hr className="my-2" />
        <p>Donate your new or gently worn clothing today!</p>
        <p className="lead">
           <Button onClick={this.toggle}>Add Item</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;