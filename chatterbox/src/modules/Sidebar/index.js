import React, { Component } from 'react';
import UserChat from '../../Main/MainArea/ChattingComponent/Sidebar/UserChat';
import Sidebar from '../../Main/MainArea/ChattingComponent/Sidebar/index'
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class UserChatClick extends Component {
    constructor(props) {
        super(props);
        this.props.id;

    }

    
    render() {
        return(
            <div className="userChatBox"></div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/chat/'+this.props.id)
  }, dispatch)

  export default connect(
    null, 
    mapDispatchToProps
  )(UserChatClick)