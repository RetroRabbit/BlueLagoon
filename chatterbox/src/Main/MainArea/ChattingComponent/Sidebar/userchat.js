import React from 'react';
import '../../../../modules/Sidebar/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chatClick , changeChat } from '../../../../modules/Sidebar/index';
import { push } from 'react-router-redux';
import { messagesCatch } from '../../../../modules/Sidebar';


class UserChat extends React.Component {
    render() {

        return (
            <div className="userChatLineBox">
                <div>
                    <div
                        className="userChatBox"
                        onClick={() => (
                            this.props.chatClick(this.props.id),
                            this.props.changeRoute(this.props.id)
                        )}
                    >
                        <div className="userChatDetailsHolder">
                            <div className="userNameBox">
                                <img src={this.props.img} alt="logo" className="imageStyling" />
                                {this.props.username}
                            </div>
                            <div className="chatTextBox">
                                <p className="status">{this.props.msg}</p>
                            </div>
                        </div>
                    </div>
                    <div className="line" />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            chatClick,
            changeRoute: id => push('/chat/' + id)
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(UserChat);
