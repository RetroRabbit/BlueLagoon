import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Auth from './Auth';
import Main from './Main';

class App extends Component {
  render() {
    return (
	    <div>
	      <Route path="/auth" component={Auth} />
	      <Route exact path="/" component={Main} />
	    </div>
    );
  }
}

export default App;
