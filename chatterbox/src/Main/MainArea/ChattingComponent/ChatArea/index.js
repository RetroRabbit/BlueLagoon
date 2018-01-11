import React, { Component } from 'react';
import { messagesCatch } from '../../../../modules/Sidebar/index';
import './ChatArea.css';
import MessageLine from './MessageLine';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { easing } from 'material-ui/styles/transitions';
import messages from './messages';

var message = "";

class ChatArea extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            message = event.target.value;
            event.preventDefault();
            this.refs.fruitName.value = "";
            this.props.messagesCatch(message);
           message = "";
        }
        else {
           message = event.target.value;
        }
    }
    // getInitialState(){
    //     return (
    //       {
    //         fruits : {
    //           'fruit-1' : 'orange',
    //           'fruit-2' : 'apple'
    //         }
    //       }
    //      )
    //     }
    // addFruit(fruit) {
    //      var timestamp = (new Date()).getTime();
    //      this.state.fruits['fruit-' + timestamp ] = fruit;
    //      this.setState({ fruits : this.state.fruits });
    // }
    // createFruit(e) {
    //     e.preventDefault();

    //     var fruit = this.refs.fruitName.value;
    //     if(typeof fruit === 'string' && fruit.length > 0) {
    //         this.props.addFruit(fruit);
    //         this.refs.fruitForm.reset();
    //     }
    // }
        
  
    render() {
       
        return (
            
            <div className="ChatArea">
                <div className="messages-container">
                    <div className="messages-holder">
                        <MessageLine message="hi" type="sent" />
                        <MessageLine message="hello" type="received" />
                        <MessageLine message="Blue" />
                        <MessageLine message="Lagoon" type="received" />
                        <MessageLine message="Blue Lagoon" />
                        {/* {
                            Object.keys(this.props.fruits).map(function(key) {
                                return <li className="list-group-item list-group-item-info">{this.props.fruits[key]}</li>
                            }.bind(this))
                        } */}
                        {this.props.Messages.map(msg => (
                            <MessageLine
                                message={msg.message}
                                type={msg.type}
                            />
                            
                        ))}

                    </div>
                </div>
                
                <div className="writer-container">
                    <form  ref="fruitForm">
                    <div className="add-attachment fa fa-plus-circle"/>
                    <div  />
                    
                    <input   type="text"
                        rows={1}
                        //onChange={(e) => this.props.messagesCatch(e)}
                        className="input-message"
                        placeholder="Type a message"
                        onKeyPress={(e) => this.handleKeyPress(e)}
                        ref="fruitName"
                    />
                    
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { 
        Messages: state.sidebar.Messages,
        messagesCatch: messagesCatch
    }


};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            messagesCatch: messagesCatch
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
