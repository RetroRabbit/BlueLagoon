import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Button } from 'material-ui';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {addImageStage,inputChangeStage} from "../../modules/register"

class StepTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="stage-two">
                <div className="input-image-container">
                    {this.props.hasImage && (
                        <img className="input-image" alt="none" src={this.props.image.preview} />
                    )}
                    <input
                        onChange={this.props.inputChange.bind(this)}
                        className="upload-img-input"
                        id="upload-img-input"
                        style={{ display: 'none' }}
                        type="file"
                        accept=".png, .jpg ,.jpeg"
                    />
                    {!this.props.hasImage && (
                        <div
                            onClick={this.props.addImage.bind(this)}
                            className="add-picture fa fa-plus-circle"
                        />
                    )}
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
    addImage:addImageStage,
    inputChange:inputChangeStage
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepTwo);


