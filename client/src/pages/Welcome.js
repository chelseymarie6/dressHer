import React from 'react';
import { Container, Row } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import Upload from "./Upload";


const Welcome = (props) => {

	// constructor(props) {
	//     super(props);
	//     this.state = {
	//       modal: false
	//     }

	//     this.toggle = this.toggle.bind(this);
	//   }

	  // toggle() {
	  //   this.setState({
	  //     modal: !this.state.modal
	  //   });
	  // }
  


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
      <Container>
		<Row>
			{/* <Upload /> */}
		</Row>
	  </Container>
    </div>

  );
};


export default Welcome;

