import React, { Component } from 'react';
import Register from './Register';
import { Route } from 'react-router-dom';
import Login from './Login';
import './Auth.css';
import { connect } from 'react-redux';

class Auth extends Component {
    render() {
        return (
            <div className={`Auth ${this.props.className}`}>
                <div className={`auth-box `}>
                    <Route path={`${this.props.match.path}/login`} component={Login} />
                    <Route path={`${this.props.match.path}/register`} component={Register} />
                </div>
            </div>
        );
    }
}

function mapState(params) {
    return {
        className: params.responsive.windowSizeClass
    };
}
export default connect(mapState, null)(Auth);
