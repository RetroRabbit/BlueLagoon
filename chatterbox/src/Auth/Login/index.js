import React, { Component } from 'react';
import logo from '../../assets/Full Logo.png';
import './login.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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
                <br />
                <Button raised className="button">
                    LOGIN
                </Button>
                <p className="bottom-text">
                    <pre>No account yet? Get setup now </pre>{' '}
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
export default Login;
