import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { history } from './store';
 
import Sidebar from './Main/MainArea/ChattingComponent/Sidebar/index';
import Auth from './Auth';
import Main from './Main';
import Loader from './assets/Loader';
import MenuAppBar from './Main/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.splash = this.splash.bind(this);
    }
    componentDidMount() {
        console.log('TO-DO: Check if user online');
        this.funcVar = setInterval(this.splash, 2000);
    }
    splash() {
        history.push('/auth/login');
        this.setState({ loading: false });
        clearInterval(this.funcVar);
    }
    render() {
        return (
            <MuiThemeProvider>
                {this.state.loading && <Loader />}
            </MuiThemeProvider>
        );
    }
}

export default App;
