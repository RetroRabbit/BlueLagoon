import React, { Component } from 'react';
import logo from '../logo.svg';
import Login from './Login';
import Register from './Register';
import { Route } from 'react-router-dom'

import './Auth.css';

class Auth extends Component {
	constructor(e){
		super(e);
	}

  render() {
    return (
      <div className="Auth">
      	<div className="auth-box">
      		<Route path={`${this.props.match.path}/login`} component={Login} />
      		<Route path={`${this.props.match.path}/register`} component={Register} />
	    </div>
      </div>
    );
  }
}

export default Auth;
