import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ChattingComponent from "./ChattingComponent"
import Settings from "./Settings/settings-component"
import "./MainArea.css"

class MainArea extends Component {
  render() {
  	// alert(this.props.match.path)
    return (
      <div className="MainArea">

                    <Route exact path={`${this.props.match.path}`} component={ChattingComponent} />
                    <Route path={`${this.props.match.path}settings`} component={Settings} />
      </div>
    );
  }
}

export default MainArea;
