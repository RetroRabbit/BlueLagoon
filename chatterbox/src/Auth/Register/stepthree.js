import React, { Component } from 'react';
import {Button,TextField} from "material-ui";

class StepOne extends Component {
  render() {
    return (
      <div >
	        
        <div className="input-line">
          <TextField
            id="with-placeholder"
            label="Friends Email"
            className={"register-input"}
            margin="normal"
          />
        </div>
      </div>
    );
  }
}

export default StepOne;