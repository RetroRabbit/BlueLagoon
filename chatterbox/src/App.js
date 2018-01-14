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
import { resize } from './modules/Responsive';
import { withRouter } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        let user=getCookie("user");
        if(user)
            this.props.history.push("/")
        else
            this.props.history.push("/auth/login")
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
export default withRouter(connect(null, mapDispatchToProps)(App));
function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    } 
