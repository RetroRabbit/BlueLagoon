import React, { Component } from "react";

class AddFruitForm extends Component{
    createFruit(e) {
        var fruit = this.refs.fruitName.value;
        if(typeof fruit === 'string' && fruit.length > 0) {
            this.props.addFruit(fruit);
            this.refs.fruitForm.reset();
        }
    }
     render() {
      return(
        <form className="form-inline" ref="fruitForm" onSubmit={this.createFruit}>
        <div className="form-group">
          <label for="fruitItem">
            Fruit Name
            <input type="text" id="fruitItem" placeholder="Type a message"className="form-control" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Add Fruit</button>
       </form>
      )
     }
    }
export default AddFruitForm;