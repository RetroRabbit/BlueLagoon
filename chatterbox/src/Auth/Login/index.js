import React, { Component } from 'react';
import logo from '../../assets/Full Logo.png';
import './login.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { verifyUser,handleEmail,handlePassword } from '../../modules/login/login-actions';
import { enterUserToSystem,enterUserToSystemOnLogin } from '../../modules/User';

class Login extends Component {
    register() {
        this.props.history.push('/auth/register');
    }
    login(){        
        let emailText=this.props.emailText;    
        let password=this.props.password; 
        const url_api="http://localhost:54604/api/";   

            if (emailText.length==0 || password.length==0) {
                this.props.verify("")
            }else{                
                let data={
                    email:emailText,
                    password
                }
                let MyResponse;
                let self=this;
                let xhttp=new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                  if (xhttp.readyState == 4 && xhttp.status == 200) {
                    MyResponse=JSON.parse(this.responseText);
                    if (MyResponse.status=="failed") {
                        self.props.verify(MyResponse)                        
                    }else if (MyResponse.status=="successful") {
                        // console.log(MyResponse.user)
                        self.props.enterUserToSystem(MyResponse.user);
                        self.props.history.push("/")
                        self.props.verify(MyResponse)
                    }
                  }
                };
                xhttp.open("POST", url_api+"user/login", false);
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send(JSON.stringify(data));

            }

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
                <Button onClick={this.login.bind(this)} raised className="button">
                    LOGIN
                </Button>
                <Button id="btn-hidden-login" style={{"display":"none"}} onClick={this.props.enterUserToSystemOnLogin.bind(this)} >HELLO</Button>
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
        emailText: state.login.emailText,
        password: state.login.password
    };
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            verify: verifyUser,
            handleEmail,
            handlePassword,
            enterUserToSystem,
            enterUserToSystemOnLogin
        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
