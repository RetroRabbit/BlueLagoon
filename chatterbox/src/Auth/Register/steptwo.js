import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Button } from 'material-ui';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inputChangeStage } from "../../modules/register"

class StepTwo extends Component {
    constructor(props) {
        super(props);
    }
    addImage(){
        var el = document.getElementById('upload-img-input');
        el.click();
    }
    inputChange(){
        var self=this;
        var el = document.getElementById('upload-img-input');
            let val = el.value;
            let input = el;
            let ext = val.substring(val.lastIndexOf('.') + 1).toLowerCase();
            if (
                input.files &&
                input.files[0] &&
                (ext === 'gif' || ext === 'png' || ext === 'jpeg' || ext === 'jpg')
            ) 
            var reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(e) {
                let obj = { preview: e.target.result, value: val, file: input.files[0]};
                self.props.inputChange(obj)
            };
    }
    render() {
        return (
            <div className="stage-two">
                <div className="input-image-container">
                    {this.props.hasImage && (
                        <img className="input-image" alt="none" src={this.props.preview} />
                    )}
                    <input
                        onChange={this.inputChange.bind(this)}
                        className="upload-img-input"
                        id="upload-img-input"
                        style={{ display: 'none' }}
                        type="file"
                        accept=".png, .jpg ,.jpeg"
                    />
                    {!this.props.hasImage && (
                        <div
                            onClick={()=>this.addImage()}
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
    heading:state.register.heading,
    preview:state.register.preview,
    hasImage:state.register.hasImage,
    
})
  
const mapDispatchToProps = dispatch => bindActionCreators({
    inputChange:inputChangeStage
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepTwo);


