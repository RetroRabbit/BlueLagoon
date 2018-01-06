import React, { Component } from 'react';
import {Button} from "material-ui";
import './Register.css';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <h1 className="heading-title">Step One</h1>
        <h1 className="heading-title">THE BASICS</h1>
        <div className="input-line">
	        <input className="register-input" placeholder="Your name"/>
        </div>
        <div className="input-line">
	        <input className="register-input" placeholder="Email"/>
        </div>
        <div className="input-line">
	        <input className="register-input" placeholder="Password"/>
        </div>
	    <Button raised color="#0DABAF">
	      NEXT
	    </Button>
      </div>
    );
  }
}

export default Register;