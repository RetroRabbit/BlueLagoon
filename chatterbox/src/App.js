import React, { Component } from 'react';
import './App.css';
import MenuAppBar from './Main/Header';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <MenuAppBar />
            </MuiThemeProvider>
        );
    }
}

export default App;
