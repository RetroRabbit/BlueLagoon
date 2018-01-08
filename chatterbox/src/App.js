import React, { Component } from 'react';

import './App.css';
import ListExampleChat from './Main/MainArea/ChattingComponent/Sidebar';
import { Route } from 'react-router-dom'
import { push } from 'react-router-redux'
import { history } from './store'
import Auth from './Auth';
import Settings from './Main/MainArea/Settings/settings-component';
import Main from './Main';
import Loader from './assets/Loader';


class App extends Component {
	constructor(props){
		super(props);
		this.state={
			loading:true
		}
		this.splash=this.splash.bind(this)
	}
  componentDidMount(){
    console.log("TO-DO: Check if user online");
    this.funcVar=setInterval(this.splash,2000);
  }
  splash(){
  	 history.push("/auth/login");  	 
  	 this.setState({loading:false})
     clearInterval(this.funcVar)
  }
  render() {
    return (
	    <div>
		    {this.state.loading && <Loader/>}
	      <Route path="/auth" component={Auth} />
	      <Route exact path="/" component={Main} />
	    </div>
    );
  }
}

export default App;
