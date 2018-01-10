import { Component } from "react";

class App extends Component({
  getInitialState : function() {
    return (
      {
        fruits : {
          'fruit-1' : 'orange',
          'fruit-2' : 'apple'
        }
      }
     )
    },
    addFruit(fruit) {
     //create a unike key for each new fruit item
     var timestamp = (new Date()).getTime();
     // update the state object
     this.state.fruits['fruit-' + timestamp ] = fruit;
     // set the state
     this.setState({ fruits : this.state.fruits });
    },
    render() {
      return (
        <div className="component-wrapper">
          <FruitList fruits={this.state.fruits} />
          <AddFruitForm addFruit={this.addFruit} />
        </div>
      );
     }
    });

    class FruitList extends Component({
      render : function() {
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
     });

    class AddFruitForm extends Componen({
      createFruit : function(e) {
        e.preventDefault();
        //get the fruit object name from the form
        var fruit = this.refs.fruitName.value;
        //if we have a value
        //call the addFruit method of the App component
        //to change the state of the fruit list by adding an new item
        if(typeof fruit === 'string' && fruit.length > 0) {
          this.props.addFruit(fruit);
          //reset the form
          this.refs.fruitForm.reset();
        }
       },
       render() {
        return(
          <form className="form-inline" ref="fruitForm" onSubmit={this.createFruit}>
          <div className="form-group">
            <label for="fruitItem">
              Fruit Name
              <input type="text" id="fruitItem" placeholder="e.x.lemmon" ref="fruitName" className="form-control" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Add Fruit</button>
         </form>
        )
       }
      })


export default App