import React, { Component } from 'react';
import { Button } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StepOne from './stepone';
import StepTwo from './steptwo';
import StepThree from './stepthree';
import './Register.css';
import { changeStage } from '../../modules/register';

class Register extends Component {
    constructor(props) {
        super(props);
    }
    handleSkip() {
        this.props.history.push('/');
        alert('TO-DO: redirect to main page');
    }
    render() {
        return (
            <div className="Register">
                <h1 className="heading-title heading-step">
                    {this.props.heading[this.props.stage - 1].title}
                </h1>
                <h1 className="heading-title">{this.props.heading[this.props.stage - 1].sub}</h1>
                {this.props.stage == 1 && <StepOne />}
                {this.props.stage == 2 && <StepTwo />}
                {this.props.stage == 3 && <StepThree />}

                <Button
                    onClick={() => this.props.changeStage(this.props.stage)}
                    raised
                    className="button-next"
                >
                    NEXT
                </Button>
                {this.props.stage != 1 && (
                    <div onClick={this.handleSkip.bind(this)} className="skip">
                        Skip for now
                    </div>
                )}
                {this.props.error && (
                    <div className="error-display">
                        {this.props.heading[this.props.stage - 1].error}
                    </div>
                )}
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
            changeStage: changeStage
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
