import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Upload from './Upload';
import "./Main.css";
import API from '../utils/API';
import Cards from './Cards.js';
import Welcome from './Welcome';



class Main extends Component {

	state = {
		items: [],
	};

componentDidMount() {
	this.loadAll();
}

loadAll(){
	API.getAll()
		.then(res =>
			  this.setState({ items: res.data})
			 )
		.catch(err => console.log(err));
}


render() {
	return (
		<div>
			<Container>
				<Row>
					<Welcome />
				</Row>
			</Container>

			<Container>
				<Row>
					<Cards />
				</Row>
			</Container>

		</div>
	);
}
}


export default Main;