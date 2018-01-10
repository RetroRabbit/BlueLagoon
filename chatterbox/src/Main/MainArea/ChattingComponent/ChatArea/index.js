import React, { Component } from 'react';

import './ChatArea.css';
import MessageLine from './MessageLine';

class ChatArea extends Component {
    onTextAreaChange(e) {
        let el = e.target;
        el.style.cssText = 'height:auto; padding:10';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
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
                    </div>
                </div>
                <div className="writer-container">
                    <div className="add-attachment fa fa-plus-circle" />
                    <div style={{ clear: 'both' }} />
                    <textarea
                        rows={1}
                        onChange={this.onTextAreaChange.bind(this)}
                        className="input-message"
                        placeholder="Type a message"
                        onClick= {<MessageLine message = "this.props"/>}
                    />
                </div>
            </div>
        );
    }
}

export default ChatArea;
