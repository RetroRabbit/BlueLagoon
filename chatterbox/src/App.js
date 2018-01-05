import React, { Component } from 'react'; 
import './App.css';
import Header from './Main/Header';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <Header/>
  </MuiThemeProvider>
    );
  }
}

export default App;
