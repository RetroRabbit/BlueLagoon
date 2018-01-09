import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Button } from 'material-ui';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {handleStageOneEmail,handleStageOneName,handleStageOnePassword} from "../../modules/register"

class StepOne extends Component {
    constructor(e) {
        super(e);
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
    heading:state.register.heading
  })
  
const mapDispatchToProps = dispatch => bindActionCreators({
    handlePassword:handleStageOnePassword,
    handleEmail:handleStageOneEmail,
    handleName:handleStageOneName
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepOne);
