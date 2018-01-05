import React, { Component } from 'react';
import {Button,TextField} from "material-ui";

class StepOne extends Component {
  render() {
    return (
      <div >
	        
        <div className="input-image-container">
	       <img className="input-image" src={"http://oi39.tinypic.com/i1hgd3.jpg"}/>
        </div>
      </div>
    );
  }
}

export default StepOne;