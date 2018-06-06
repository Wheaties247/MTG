import React, { Component } from "react";
import axios from "axios";

class EditCard extends Component {
	constructor(props) {
		super(props);
		console.log(this.props)
		this.state = {
			id : this.props.cardInfo.id,
			deckId: this.props.cardInfo.deckId,
			userId: this.props.cardInfo.userId,
			cardId: this.props.cardInfo.cardId
		};
	this.deckSelect = this.deckSelect.bind(this);
	this.handleDeleteCard = this.handleDeleteCard.bind(this); 
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.patchCard = this.patchCard.bind(this);
	}
	deckSelect(){
		const decks = [...this.props.deckList];
		return decks.map( deck=>{

			return	(
					<label key={deck.id}>
					<input 
					key={deck.id}
					name="deckId" 
					value={deck.deckName}
					type="radio"
					onChange={this.handleChange}
					/>{deck.deckName}
					<br />
					</label>	
					)	
		}

			);
	}
	handleDeleteCard(){
		axios({
			url: `/cards/${this.props.index}`,
			method:"Delete"
		})
		.then(resp=>{
			this.props.getDeckInfo();
		})
		.catch(err =>{
			console.log("Error at handleDeleteCard", err)
		})

	}

	handleChange(e){
		const value = e.target.value;
		const name = e.target.name;
		console.log(value);
		this.setState({
			[name]: value
		})
	}
	patchCard(){
		axios({
			url: `/cards/${this.state.id}`,
			method: "Patch",
			data: this.state
		})
		.then(resp =>{
			console.log(resp.data)
			this.props.getDeckInfo();
			this.props.editCardInfo(null);
		})
	}
	handleSubmit(e){
		e.preventDefault();
		this.patchCard();
	}
	render() {
		return (
			<div className ="editCard"
			onClick={() => this.props.editCardInfo(null)} >
			<h1 className="closeForm">Close Form</h1>
				<form
				onSubmit={this.handleSubmit}
				 onClick={e => e.stopPropagation()}>
				
				 <div className="deckRadio">
					{this.deckSelect()}

				 </div>
				 <input type="submit" value="Edit Deck" />
				<h1 onClick={()=>this.handleDeleteCard()}>DELETE THIS CARD</h1>
				</form>
			</div>
		);
	}
}

export default EditCard;
