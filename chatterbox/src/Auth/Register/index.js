import React, { Component } from 'react';
import {Button,TextField} from "material-ui";
import StepOne from './stepone';
import StepTwo from './steptwo';
import StepThree from './stepthree';
import './Register.css';

class Register extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		stage:1,
  		heading:[
  			{
  				title:"Step One",
  				sub:"THE BASICS"
  			},
  			{
  				title:"Step Two",
  				sub:"THE BASICS"
  			},
  			{
  				title:"Step Three",
  				sub:"THE BASICS"
  			}

  		]
  	}
  }
  handleNext(curr){

  }
  render() {
    return (
      <div className="Register">
        <h1 className="heading-title heading-step">{this.state.heading[this.state.stage].title}</h1>
        <h1 className="heading-title">{this.state.heading[this.state.stage].sub}</h1>
        {this.state.stage==1 && <StepOne/>}
        {this.state.stage==2 && <StepTwo/>}
        {this.state.stage==3 && <StepThree/>}

	    <Button onClick={()=>alert("click")} raised className="button-next">
	      NEXT
	    </Button>
      </div>
    );
  }
}

export default Register;