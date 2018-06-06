import React, {Component} from 'react';
import {browserHistory, Redirect} from "react-router-dom";



class Results extends Component{
	constructor(props){
		super(props);
		this.state = {
			fireRedirect:false
		}
		this.routeToCurrentCard = this.routeToCurrentCard.bind(this);
	}

routeToCurrentCard(card){
	this.props.handleLiftInfo(card);
	this.setState({fireRedirect:true});
}
	listCards(cardList){
		return cardList.map(card=>{
			console.log(card)
			return(
				<div 
				className="img" 
				key={card.id}
				onClick={()=> this.routeToCurrentCard(card)}>
						{card.imageUrl ? <img className="cardImg hover"
						src={card.imageUrl} /> : <div className="noImg hover" ><h1>{card.name} </h1></div> }
					
				</div>
				);
		});
	}


	render(){
 		const cardlist = [...this.props.cardlist];
		return(
				<div className="results">
				{this.listCards(cardlist)}
				{this.state.fireRedirect ? <Redirect to='/cardInfo' /> : null}
				</div>
			)
		}
	}

export default Results;