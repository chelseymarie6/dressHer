import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Navigation from './Navigation';
import Upload from './Upload';
import API from '../utils/API';
import Cards from './Cards.js';



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
					<Navigation />
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