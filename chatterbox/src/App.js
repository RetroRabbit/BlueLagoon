import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { history } from './store';
import SideBar from './Main/MainArea/ChattingComponent/Sidebar/index';
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
<<<<<<< HEAD
                <Route exact path="/" component={Main} />
=======
                {window.location.href.indexOf("auth")<0 && <Route path="/" component={Main} />}
>>>>>>> develop
            </div>
        );
    }
}

export default App;
