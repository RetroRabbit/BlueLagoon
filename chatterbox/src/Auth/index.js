import React, { Component } from 'react';
import logo from '../logo.svg';
import Login from './Login';
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
      	<div className="auth-box">
	        <Login/>
	    </div>
      </div>
    );
  }
}

export default Auth;