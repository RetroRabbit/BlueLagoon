import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { history } from './store';
import SideBar from './Main/MainArea/ChattingComponent/Sidebar/index';
import Auth from './Auth';
import Main from './Main';
import Loader from './assets/Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resize} from './modules/Responsive';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('TO-DO: Check if user online');
        window.addEventListener('resize', () => this.props.resize());
    }
    componentDidUnmount() {
        window.removeEventListener('resize');
    }
    render() {
        return (
            <div>
                <Route path="/auth" component={Auth} />
                {window.location.href.indexOf('auth') < 0 && <Route path="/" component={Main} />}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            resize
        },
        dispatch
    );
export default connect(null, mapDispatchToProps)(App);
