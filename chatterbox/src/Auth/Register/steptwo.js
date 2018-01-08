import React, { Component } from 'react';
import {TextField} from "material-ui";

class StepOne extends Component {
	constructor(pr){
		super(pr);
		this.state={
			hasImage:false,
			image:{}
		}
	}
	addImage(){
		var el = document.getElementById('upload-img-input');
		el.click();
	}
	inputChange(){
		var el = document.getElementById('upload-img-input');
		let val=el.value;
		let input=el;
	    let ext = val.substring(val.lastIndexOf('.') + 1).toLowerCase();
	    let self=this;
	    //alert(ext)
	    if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            // $('.imagepreview').attr('src', e.target.result);
	            let obj={preview:e.target.result,value:val,file:input.files[0]}
	            self.setState({image:obj,hasImage:true});
	            self.props.canNext(true);
	        }

	        reader.readAsDataURL(input.files[0]);
	    }
	}

	render() {
	    return (
	      <div className="stage-two" >
		        
	        <div className="input-image-container">
		       {this.state.hasImage && <img className="input-image" src={this.state.image.preview}/>}
		       <input onChange={this.inputChange.bind(this)} className="upload-img-input" id="upload-img-input" style={{"display":"none"}} type="file" accept=".png, .jpg ,.jpeg"/>
		       {!this.state.hasImage && <div onClick={this.addImage.bind(this)} className="add-picture fa fa-plus-circle"></div>}
	        </div>
	      </div>
	    );
	}
}

export default StepOne;