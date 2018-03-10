import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Upload extends Component {

render() {
	return (
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
	);
}
}

export default Upload;