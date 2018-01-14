import React, { Component } from 'react';
import logo from '../../assets/Full Logo.png';
import './login.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { verifyUser,handleEmail,handlePassword } from '../../modules/login/login-actions';

class Login extends Component {
    register() {
        this.props.history.push('/auth/register');
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
                        id="Email"
                        label="Email"
                        onChange={this.props.handleEmail.bind(this)}
                        className="text-field"
                        margin="normal"
                    />
                    <TextField
                        id="Password"
                        label="Password"
                        onChange={this.props.handlePassword.bind(this)}
                        className="text-field"
                        margin="normal"
                        type="password"
                    />
                </div>
                <br />
                <Button onClick={this.props.verify.bind(this)} raised className="button">
                    LOGIN
                </Button>
                {this.props.error && <div className="error-display">{this.props.errorMessage}</div>}
                <p className="bottom-text">
                    No account yet? Get setup now &nbsp;{' '}
                    <i
                        onClick={this.register.bind(this)}
                        className="fa fa-chevron-down"
                        aria-hidden="true"
                    />
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.login.error,
        errorMessage: state.login.errorMessage,
        email: state.login.email,
        password: state.login.password
    };
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            verify: verifyUser,
            handleEmail,
            handlePassword
        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
