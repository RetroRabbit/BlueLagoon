import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
class ChattingComponent extends Component {
    render() {
        return (
            <div className="ChattingComponent">
                <Sidebar />
                <ChatArea />
            </div>
        );
    }
}

export default ChattingComponent;
