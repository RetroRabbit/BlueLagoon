import React, { Component } from 'react';
import logo from '../../assets/Full Logo.png';
import './login.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import constants from './constants';
import { userDetails } from './initialState.json';
import { userlogin } from  './loginReducer';


const state = "unsuccess";

const action = {
  type : constants.ACTION_VALID,
  validLogin : "successful"
}

const nextState = userlogin (state, action);

console.log(`
  initial userlogin : ${state}
  action : ${JSON.stringify(action)}
  new userlogin :${nextState}
  `);

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
                <TextField Email id="Email" label="Email" className="text-field" margin="normal" />
                <TextField
                    Password
                    id="Password"
                    label="Password"
                    className="text-field"
                    margin="normal"
                />
                </div>
                <br />
                <Button raised className="button">
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
export default Login;
console.log(`
  There are currently ${userDetails.length} users online
  ${Object.keys(constants).join('\n  ')}
`);
