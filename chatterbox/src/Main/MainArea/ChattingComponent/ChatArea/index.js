import React, { Component } from 'react';
import { messagesCatch } from '../../../../modules/Sidebar/index';
import './ChatArea.css';
import MessageLine from './MessageLine';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { easing } from 'material-ui/styles/transitions';

var message = "";

class ChatArea extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleKeyPress = this.handleKeyPress.bind(this)
      
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            message = event.target.value;
            event.preventDefault();
            
            
            if(message.length > 0)
            {
                this.refs.fruitName.value = "";
                var currentDate = new Date();
                var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
                this.props.messagesCatch(message, currentTime, "received");
                message = "";
            }
           
           this.forceUpdate();
        }
        else {
           message = event.target.value;
        }
    }
  
    render() {
        console.log(this.props.Messages)
        return (
            
            <div className="ChatArea">
                <div className="messages-container">
                    <div className="messages-holder">
                    {this.props.Messages?
                        this.props.Messages.map(msg => (
                            <MessageLine
                                message={msg.message}
                                type={msg.type}
                                time={msg.time}
                                
                            />
                        ))
                        :
                        null
                    }
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
