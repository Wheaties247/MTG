import React, { Component } from "react";
import axios from "axios";
class Card extends Component{ 
	constructor(props){
		super(props);
		this.state={
			loading:false,
			cardData: null
		};
		this.getCardData = this.getCardData.bind(this);
		this.tenaryHelper = this.tenaryHelper.bind(this);
	}
	getCardData() {
    this.setState({loading: true})
    const cardInfo = this.props.cardData;
      axios({
        url: `https://api.magicthegathering.io/v1/cards/${cardInfo.cardId}`
      })
      .then(resp=>{
      	const cardData = resp.data;
      	console.log(cardData);

      	this.setState({
			      loading: false,
			      cardData: cardData
			    });
      });
    }
    tenaryHelper(card){
    	console.log("Card", this.props.cardData);
    	if(card){
    	return(<div>
    		<img src={card.card.imageUrl}/>
    		<h1>{this.props.cardData.deckId}</h1>
    		</div>
    		);
    	}
    }
    componentDidMount(){
    	this.getCardData();
    }
    
    
  
	render(){
	
		return(
			<div>
			{this.state.loading? <h1>Loading Card ... </h1>:  this.tenaryHelper(this.state.cardData)}
			</div>
			);
	}
}

export default Card;
