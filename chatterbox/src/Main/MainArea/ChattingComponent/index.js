import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import {connect} from "react-redux"
class ChattingComponent extends Component {
    render() {
        
        return (
            <div className="ChattingComponent">
                {(!this.props.phonemode ||(this.props.phonemode && !this.props.chatmode)) && <Sidebar />}
                {(!this.props.phonemode ||(this.props.phonemode && this.props.chatmode)) && <ChatArea />}
            </div>
        );
    }
}

function mapState(state) {
    return({
        chatmode:state.header.phonemodechat,
        phonemode:state.header.phonemode
    })
    
}
export default connect(mapState, null)(ChattingComponent);
