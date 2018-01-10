import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { history } from './store';

import Auth from './Auth';
import Main from './Main';
import Loader from './assets/Loader';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('TO-DO: Check if user online');
    }
    render() {
        return (
            <div>
                <Route path="/auth" component={Auth} />
                <Route path="/" component={Main} />
            </div>
        );
    }
}

export default App;
