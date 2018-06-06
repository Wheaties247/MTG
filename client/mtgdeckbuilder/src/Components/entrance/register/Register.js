import React, {Component} from "react";


class Register extends Component{
	constructor(props){
		super(props);
		this.state = {}

	}

handleChange = (e) =>{
		const value = e.target.value;
		this.setState({
			USERNAME: value
		})
	}
handleSubmit = (e) =>{
	e.preventDefault();
	
}

	render(){
		return(
			<form onSubmit = {this.handleSubmit}>
				<label>
				Please Input a username to store all work
					<input type="text" name="USERNAME" onChange = {this.handleChange}/>
				</label>
				<input type="submit" value="submit" />
			</form>
			)
	}
}
export default Register;