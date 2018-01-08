import React, { Component } from 'react';
import {TextField} from "material-ui";

class StepOne extends Component {
	constructor(e){
		super(e);
		this.state={
			name:"",
			email:"",
			password:""
		}
		this.checkCanNext=this.checkCanNext.bind(this);
	}
	handleName(e){		
		console.log("checkCanNext:",this.checkCanNext())
		this.setState({name:e.target.value})
	}
	handleEmail(e){		
		console.log("checkCanNext:",this.checkCanNext())
		this.setState({email:e.target.value})
	}
	handlePassword(e){		
		console.log("checkCanNext:",this.checkCanNext())
		this.setState({password:e.target.value})
	}
	checkCanNext(){
		let hasName=this.state.name.length>0;
		let hasEmail=this.state.email.length>0; 
		let hasPassword=this.state.password.length>0;

		if(hasName && hasEmail && hasPassword){
			this.props.canNext(true);
			return true;
		}
		this.props.canNext(false);
		return false;
	}
	render() {
	    return (
	      <div className="stage-one">
		        
	        <div className="input-line">
		        <TextField
		          id="name"
		          onChange={this.handleName.bind(this)}
		          label="Your name"
		          className={"register-input"}
		          margin="normal"
	              value={this.state.name}
		        />
	        </div>
	        <div className="input-line">
		        <TextField
		          id="email"
		          onChange={this.handleEmail.bind(this)}
		          label="Email"
		          className={"register-input"}
		          margin="normal"
	              value={this.state.email}
		        />
	        </div>
	        <div className="input-line">
		        <TextField
		          id="password"
		          type="password"
		          onChange={this.handlePassword.bind(this)}
		          label="Password"
		          className={"register-input"}
		          margin="normal"
	              value={this.state.password}
		        />
	        </div>
	      </div>
	    );
	}
}

export default StepOne;