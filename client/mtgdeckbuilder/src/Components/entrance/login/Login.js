
import React, {Component} from 'react';

class login extends Component{
	constructor(props){
		super(props);
		this.state = {};
		
	}
	//syntax for binding without using 'bind' keyword binding
	handleChange = (e) =>{
		const value = e.target.value;
		this.setState({
			USERNAME: value
		})
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.handleLogin(this.state);
	}


	render(){
		return(
			
			<form onSubmit = {this.handleSubmit} >
			<label>
			Please Input a username to Login
			<input type="text" name="USERNAME" onChange ={this.handleChange}/>
			</label>
			<input type="submit" value="submit" />
			</form>
			
			)
	}

}
export default login;
