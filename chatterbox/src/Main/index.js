import React, { Component } from 'react';
import logo from '../logo.svg';
import './Main.css';

import MainArea from './MainArea';

import { Route } from 'react-router-dom';
import Header from "./Header"

class Main extends Component {
  render() {
    console.log("Main",this.props);
    return (
      <div className="MainApp">
        <div className="MainAppHeader">
          <Header/>
        </div>
            <Route path={`${this.props.match.path}`} component={MainArea} />
      </div>
    );
  }
}

export default Main;
