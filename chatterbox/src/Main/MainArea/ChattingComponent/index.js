import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import { connect } from 'react-redux';
import {
    handleHeaderInChat,
} from '../../../modules/Header';
import { bindActionCreators } from 'redux';
class ChattingComponent extends Component {
    componentDidMount(){
        console.log("params",this.props.match.params);
        if(this.props.phonemode){
            if(this.props.match.path.indexOf("chat")>-1){
                this.props.handleHeaderInChat(true)
            }else{
                this.props.handleHeaderInChat(false)
            }
        }
    }
    render() {
        return (
            <div className="ChattingComponent">
                {(!this.props.phonemode || (this.props.phonemode && !this.props.chatmode)) && (
                    <Sidebar />
                )}
                {(!this.props.phonemode || (this.props.phonemode && this.props.chatmode)) && (
                    <ChatArea params={this.props.match.params} url={this.props.match.path} />
                )}
            </div>
        );
    }
}

function mapState(state) {
    return {
        chatmode: state.responsive.phonemodechat,
        phonemode: state.responsive.phonemode
    };
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            handleHeaderInChat
        },
        dispatch
    );
export default connect(mapState, mapDispatchToProps)(ChattingComponent);
