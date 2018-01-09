import React, { Component } from 'react';
import logo from '../logo.svg';
import './Main.css';
import { Route } from 'react-router-dom';
import MainArea from "./MainArea"
import Header from "./Header"

class Main extends Component {
  render() {
    console.log("Main",this.props);
    return (
      <div className="MainApp">
        <header className="MainAppHeader">
          <Header/>
        </header>
            <Route path={`${this.props.match.path}`} component={MainArea} />
      </div>
    );
  }
}

export default Main;
