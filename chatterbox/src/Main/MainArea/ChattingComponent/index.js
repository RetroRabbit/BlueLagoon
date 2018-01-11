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
        chatmode:state.responsive.phonemodechat,
        phonemode:state.responsive.phonemode
    })
    
}
export default connect(mapState, null)(ChattingComponent);
