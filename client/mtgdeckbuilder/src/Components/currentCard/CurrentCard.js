import React, {Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

export default class CurrentCard extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this.saveDataToDB = this.saveDataToDB.bind(this);
	}
	saveDataToDB(){
		this.props.savesData(this.state);
	}

	componentDidMount(){

	const currentCard = {...this.props.currentCard};
		const userId = this.props.userId;
		this.setState({
			cardId: currentCard.multiverseid,
			userId: userId,
			deckId: "Regular Deck"
		});
	}

	render(){

		 let currentCard = {...this.props.currentCard}
		return(
			<div className="currentCard">
				
					<h1>SHOW CURRENT CARD</h1>
					<h1>Card Name:{currentCard.name}</h1>
					
					<img src={currentCard.imageUrl}/ >
					<h1 className="hover" onClick={this.saveDataToDB}>CLICK TO SAVE TO DB</h1>
					<Link style={this.props.linkStyle} to='/'><h1 className="hover">Back to search page</h1></Link>
					<Link style={this.props.linkStyle}to='/builder'><h1 className="hover">Manage Deck</h1></Link>
				
			</div>
			)
	}
}
