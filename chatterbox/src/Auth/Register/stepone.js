import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Button } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    handleStageOneEmail,
    handleStageOneName,
    handleStageOnePassword
} from '../../modules/register';

class StepOne extends Component {
    constructor(e) {
        super(e);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.checkCanNext = this.checkCanNext.bind(this);
    }
    handleName(e) {
        console.log('checkCanNext:', this.checkCanNext());
        this.setState({ name: e.target.value });
    }
    handleEmail(e) {
        console.log('checkCanNext:', this.checkCanNext());
        this.setState({ email: e.target.value });
    }
    handlePassword(e) {
        console.log('checkCanNext:', this.checkCanNext());
        this.setState({ password: e.target.value });
    }
    checkCanNext() {
        let hasName = this.state.name.length > 0;
        let hasEmail = this.state.email.length > 0;
        let hasPassword = this.state.password.length > 0;

        if (hasName && hasEmail && hasPassword) {
            this.props.canNext(true);
            return true;
        }
        this.props.canNext(false);
        return false;
    }
    render() {
        return (
            <div className="stage-one">
                <div className="input-line">
                    <TextField
                        id="name"
                        onChange={this.props.handleName.bind(this)}
                        label="Your name"
                        className={'register-input'}
                        margin="normal"
                    />
                </div>
                <div className="input-line">
                    <TextField
                        id="email"
                        onChange={this.props.handleEmail.bind(this)}
                        label="Email"
                        className={'register-input'}
                        margin="normal"
                    />
                </div>
                <div className="input-line">
                    <TextField
                        id="password"
                        type="password"
                        onChange={this.props.handlePassword.bind(this)}
                        label="Password"
                        className={'register-input'}
                        margin="normal"
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    stage: state.register.stage,
    canNext: state.register.canNext,
    error: state.register.error,
    heading: state.register.heading
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            handlePassword: handleStageOnePassword,
            handleEmail: handleStageOneEmail,
            handleName: handleStageOneName
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
