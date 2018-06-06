import React, { Component } from "react";
import Card from "./card/Card";
import EditCard from "./editCard/EditCard";
import EditDeck from "./editDeck/EditDeck";

import {Link} from "react-router-dom";
import axios from "axios";

class DeckBuilder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editThisCard:null,
			allYourCards:[],
			deckList:[],
			showDeckEditor:false
				};
	this.editCardInfo = this.editCardInfo.bind(this);
	this.getDeckList = this.getDeckList.bind(this);
	this.toggleDeckEditor = this.toggleDeckEditor.bind(this);
	// this.liftCardInfo = this.liftCardInfo.bind(this);
	}
	cardRender(cardlist){
		return cardlist.map((cardInfo,index)=>{

			if(this.state.editThisCard !== cardInfo.id){
			return(
				<div className="card hover" key={cardInfo.id}
				onClick ={()=>this.editCardInfo(cardInfo.id)}>
					<Card 
					key={cardInfo.id}

					cardData= {cardInfo} />
				</div>
				);
		}else{

			return(
			<EditCard 
			key={cardInfo.id}
			index = {cardInfo.id}//id from local DB
			cardInfo = {cardInfo} 
			cardData={this.state.allYourCards[index]}
			deckList={this.state.deckList}
			editCardInfo={this.editCardInfo}
			getDeckInfo={this.props.getDeckInfo}/>
			);
		}
		});
	}
	toggleDeckEditor(){
		this.setState(prevState=>{
			prevState.showDeckEditor = !prevState.showDeckEditor;
			return prevState;
		})
	}
	getDeckList(){
		axios('/decks')
		.then(resp=>{
			console.log('RUNNING', resp.data)
			this.setState({deckList:resp.data});
		})
	}
	editCardInfo(id){
		this.setState({editThisCard: id});
	}
	componentDidMount(){
		this.props.getDeckInfo();
		this.getDeckList();
	}


	
	render() {

		return (
			<div className="manageDecks">
				<h1>Manage Decks</h1>
				<div className="deckBuilderLinks">
				<Link style={this.props.linkStyle}to="/"><h1 className="hover">Back To Search</h1></Link>
				{this.state.showDeckEditor?<EditDeck getDeckList={this.getDeckList} toggleDeckEditor={this.toggleDeckEditor} onClick={()=>this.toggleDeckEditor()} /> :<h1 className="hover" onClick={()=>this.toggleDeckEditor()}>
				Add New Deck</h1>}
				</div>
				<div className="deckBuilder">
				{this.props.cards === [] ? "LOADING DECKS" : this.cardRender([...this.props.cards])}
				</div>
			</div>
		);
	}
}

export default DeckBuilder;
