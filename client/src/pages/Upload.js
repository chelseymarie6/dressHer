import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from '../utils/API';

const wellStyles = { margin: '0 auto 20px' };

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>

      <Container>
      	<Row>
      		<Col>
						<div className="well" style={wellStyles}>
    					<Button bsStyle="primary" size="lg" onClick={this.toggle} block>{this.props.buttonLabel}Add Item</Button>
						</div>
					</Col>
				</Row>
			</Container>

	        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          <ModalHeader toggle={this.toggle}>Add an Item</ModalHeader>
	          <ModalBody>
	            <Form>
					<FormGroup>
						<Label for="exampleFile">Upload Photo</Label>
						<Input type="file" name="file" id="itemPhoto" />
						<FormText color="muted">
							Upload your item photo.
						</FormText>
					</FormGroup>
					<FormGroup>
						<Label for="exampleText">Item Title</Label>
						<Input type="textarea" name="text" id="itemTitle" />
					</FormGroup>

					<FormGroup>
						<Label for="exampleText">Item Description</Label>
						<Input type="textarea" name="text" id="itemDescription" />
					</FormGroup>

					<FormGroup>
						<Label for="exampleSelect">Color</Label>
						<Input type="select" name="select" id="itemColor">
							<option>Blue</option>
							<option>Black</option>
							<option>Brown</option>
							<option>Grey</option>
							<option>White</option>
							<option>Other</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="exampleSelect">Size</Label>
						<Input type="select" name="select" id="itemSize">
							<option>X-Small</option>
							<option>Small</option>
							<option>Medium</option>
							<option>Large</option>
							<option>X-Large</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="exampleSelect">Condition</Label>
						<Input type="select" name="select" id="itemCondition">
							<option>Gently Used</option>
							<option>Almost New</option>
							<option>Brand New</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="exampleSelect">Type</Label>
						<Input type="select" name="select" id="itemType">
							<option>Blazer</option>
							<option>Dress</option>
							<option>Pants</option>
							<option>Shoes</option>
							<option>Skirt</option>
						</Input>
					</FormGroup>

					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input type="email" name="email" id="userEmail" placeholder="name@example.com" />
					</FormGroup>

					<Button>Submit</Button>
				</Form>

	          </ModalBody>
	          <ModalFooter>
	            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
	            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	          </ModalFooter>
	        </Modal>
	      </div>
	    );
	  }
	}

export default Upload;