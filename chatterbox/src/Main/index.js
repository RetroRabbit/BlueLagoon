import React, { Component } from 'react';
import logo from '../logo.svg';
import './Main.css';

import ChatArea from './MainArea/ChattingComponent/ChatArea';

class MainArea extends Component {
    render() {
        console.log('Main', this.props);
        return (
            <div className="MainApp">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <ChatArea />
            </div>
        );
    }
}

export default MainArea;
