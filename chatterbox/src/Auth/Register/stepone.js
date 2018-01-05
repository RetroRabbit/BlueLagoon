import React, { Component } from 'react';
import {Button,TextField} from "material-ui";

class StepOne extends Component {
  render() {
    return (
      <div>
	        
        <div className="input-line">
	        <TextField
	          id="with-placeholder"
	          label="Your name"
	          className={"register-input"}
	          margin="normal"
	        />
        </div>
        <div className="input-line">
	        <TextField
	          id="with-placeholder"
	          label="Email"
	          className={"register-input"}
	          margin="normal"
	        />
        </div>
        <div className="input-line">
	        <TextField
	          id="with-placeholder"
	          label="Password"
	          className={"register-input"}
	          margin="normal"
	        />
        </div>
      </div>
    );
  }
}

export default StepOne;