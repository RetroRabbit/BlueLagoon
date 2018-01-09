import React, { Component } from 'react';
import { Button } from 'material-ui';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import StepOne from './stepone';
import StepTwo from './steptwo';
import StepThree from './stepthree';
import './Register.css';
import {changeStage} from "../../modules/register"

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
    }
    handleCanNext(canNext) {
        this.setState({ canNext, error: false });
    }
    handleNext(curr) {
        // alert("stage "+curr)
        let canNext = this.state.canNext;
        if (canNext) {
            if (this.state.stage === 1) {
                console.log('TO-DO: send details to backend');
            } else if (this.state.stage === 2) {
                console.log('TO-DO: send image to backend');
            } else if (this.state.stage === 3) {
                console.log('TO-DO: search for friend, redirect to main');
                this.props.history.push('/');
            }
            if (this.state.stage !== 3)
                this.setState({ stage: curr + 1, error: false, canNext: false });
        } else {
            this.setState({ error: true });
        }
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
                {this.props.stage == 1 && <StepOne canNext={this.handleCanNext.bind(this)} />}
                {this.props.stage == 2 && <StepTwo canNext={this.handleCanNext.bind(this)} />}
                {this.props.stage == 3 && <StepThree canNext={this.handleCanNext.bind(this)} />}

                <Button
                    onClick={() => this.props.changeStage()}
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
    heading:state.register.heading
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    changeStage:changeStage
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register);
