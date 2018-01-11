import React, { Component } from "react";


class FruitList extends Component{
    render() {
      return (
        <div className="container">
          <ul className="list-group text-center">
            {
              Object.keys(this.props.fruits).map(function(key) {
                return <li className="list-group-item list-group-item-info">{this.props.fruits[key]}</li>
              }.bind(this))
            }
          </ul>
         </div>
       );
     }
   };

   export default FruitList;