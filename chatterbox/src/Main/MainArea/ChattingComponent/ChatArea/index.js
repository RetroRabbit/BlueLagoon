import React, { Component } from 'react';
import { messagesCatch } from '../../../../modules/Sidebar/index';
import './ChatArea.css';
import MessageLine from './MessageLine';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { easing } from 'material-ui/styles/transitions';


class ChatArea extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            alert('enter press here! ')

        }
    }
    
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
                        {this.props.Messages.map(msg => (
                            <MessageLine
                                message={msg.message}
                                type={msg.type}
                            />
                            
                        ))}

                    </div>
                </div>
                
                <div className="writer-container">
                    <form>
                    <div className="add-attachment fa fa-plus-circle"/>
                    <div style={{ clear: 'both' }} />
                    <input type="text"
                        rows={1}
                        onChange={(e) => this.props.messagesCatch(e)}
                        className="input-message"
                        placeholder="Type a message"
                        onKeyPress={this.handleKeyPress}
                    />
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Messages: state.sidebar.Messages
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            messagesCatch: messagesCatch
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
