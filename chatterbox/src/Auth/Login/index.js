import React, { Component } from 'react';
import logo from '../../assets/Full Logo.png';
import './login.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { verifyUser } from '../../modules/login/login-actions';

class Login extends Component {
    register() {
        this.props.history.push('/auth/register');
    }
    verify() {
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="Login">
                <h1 className="welcome-to-the">Welcome to the</h1>

                <div className="logo">
                    <img alt="none" src={logo} />
                </div>
                <div className="Fields">
                    <TextField
                        Email
                        id="Email"
                        label="Email"
                        className="text-field"
                        margin="normal"
                    />
                    <TextField
                        Password
                        id="Password"
                        label="Password"
                        className="text-field"
                        margin="normal"
                    />
                </div>
                <br />
                <Button onClick={this.verify.bind(this)} raised className="button">
                    LOGIN
                </Button>
                <p className="bottom-text">
                    No account yet? Get setup now &nbsp;{' '}
                    <i
                        onClick={this.register.bind(this)}
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                    />
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user
    };
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            verify: verifyUser
        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
