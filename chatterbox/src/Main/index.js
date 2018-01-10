import React, { Component } from 'react';
import logo from '../logo.svg';
import './Main.css';
<<<<<<< HEAD
import MainArea from './MainArea';

class Main extends Component {
    render() {
        console.log('Main', this.props);
        return (
            <div className="MainApp">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Header</h1>
                </header>
                <MainArea />
            </div>
        );
    }
=======
import { Route } from 'react-router-dom';
import MainArea from "./MainArea"
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
>>>>>>> develop
}

export default Main;
