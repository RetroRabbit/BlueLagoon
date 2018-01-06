import React, { Component } from 'react';
import {TextField} from "material-ui";

class StepOne extends Component {
  constructor(e){
    super(e);
    this.state={
      email:""
    }
    this.checkCanNext=this.checkCanNext.bind(this);
  }
  handleEmail(e){   
    console.log("checkCanNext:",this.checkCanNext())
    this.setState({email:e.target.value})
  }
  checkCanNext(){
    let hasEmail=this.state.email.length>0; 

    if(hasEmail){
      this.props.canNext(true);
      return true;
    }
    this.props.canNext(false);
    return false;
  }
  render() {
      return (
        <div className="stage-three" >
  	        
          <div className="input-line">
            <TextField
              id="with-placeholder"
              label="Friends Email"
              onChange={this.handleEmail.bind(this)}
              className={"register-input"}
              margin="normal"
              value={this.state.email}
            />
          </div>
        </div>
      );
  }
}

export default StepOne;