
import React, { Component } from 'react';


class SearchByName extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		const value = e.target.value;
		console.log(value);
		this.setState({
			cardName: value
		})
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.getCards(this.state.cardName);
	}

	render(){
		return(
			<form>
			<label>Search By Card Name
			<br />
			<input type="text" name="userQuery" onChange = {this.handleChange} />
			</label>
			<input type = 'button' value = "Search" onClick = {this.handleSubmit}/>
			</form>
			)
	}
}

export default SearchByName;