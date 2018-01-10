import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Button } from 'material-ui';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {handleStageEmail} from "../../modules/register"

class StepThree extends Component {
    constructor(e) {
        super(e);
        // this.checkCanNext = this.checkCanNext.bind(this);
    }
    
    render() {
        return (
            <div className="stage-three">
                <div className="input-line">
                    <TextField
                        id="with-placeholder"
                        label="Friends Email"
                        onChange={this.props.handleEmail.bind(this)}
                        className={'register-input'}
                        margin="normal"
                        value={this.props.email}
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
    handleEmail:handleStageEmail
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepThree);
