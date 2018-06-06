import React, { Component } from "react";
import Login from "./login/Login";
import Register from "./register/Register";

class Entrance extends Component{
constructor(props){
	super(props);
	this.state = {
		showLogin: false,
		showRegister: false
	}
	this.toggleLogin = this.toggleLogin.bind(this);
	this.toggleRegister = this.toggleRegister.bind(this);
}

toggleLogin(){
	this.setState(prevState =>{
		prevState.showLogin = !prevState.showLogin;
		return prevState;
	})
}
toggleRegister(){
	this.setState(prevState =>{
		prevState.showRegister = !prevState.showRegister;
		return prevState;
	})
}


render(){
	return(
		<div>
			<p onClick={this.toggleLogin}> Login </p>
			<p onClick={this.toggleRegister}>Sign Up</p>
			{this.state.showLogin ? <Login handleLogin = {this.props.handleLogin}/> : null}
			{this.state.showRegister ? <Register /> : null}
		</div>
		)
}


}

export default Entrance;