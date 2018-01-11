import React, { Component } from "react";
import FruitList from './messages2';
import AddFruitForm from './messages3';

class messages extends Component {
  getInitialState(){
    return (
      {
        fruits : {
          'fruit-1' : 'orange',
          'fruit-2' : 'apple'
        }
      }
     )
    }
    addFruit(fruit) {
     //create a unike key for each new fruit item
     var timestamp = (new Date()).getTime();
     // update the state object
     this.state.fruits['fruit-' + timestamp ] = fruit;
     // set the state
     this.setState({ fruits : this.state.fruits });
    }
    render() {
      return (
        <div className="component-wrapper">
          <FruitList fruits={this.state.fruits} />
          <AddFruitForm addFruit={this.addFruit} />
        </div>
      );
     }
    };

export default messages