import React, {Component} from "react";
import axios from "axios";


class EditDeck extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		const value = e.target.value;
		const name = e.target.name;
		this.setState({
			[name]: value
		})
	}
	addNewDeck(info){
		axios({
			url: '/decks',
			data: info,
			method: 'Post'
		})
		.then(resp=>{
			console.log("SUCCESSFULL addNewDeck", resp.data);
		})
		.catch(err=>{
			console.log("THERE WAS AN ERROR @ addNewDeck", err);
		})
	}
	handleSubmit(e){
		e.preventDefault();
		this.addNewDeck(this.state);
		this.props.getDeckList();
		this.props.toggleDeckEditor();
	}
	render(){
		return(
			<form>
			<h1 className="hover" onClick={()=>this.props.toggleDeckEditor()}>Close Deck Editor</h1>
				<input type="text" name="deckName" onChange={this.handleChange}/>
				<input onClick={this.handleSubmit} type="button" value="Add too decklist" />
			</form>

			)
	}
}

export default EditDeck;
