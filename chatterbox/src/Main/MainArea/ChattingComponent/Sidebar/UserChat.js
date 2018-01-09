import React from 'react';
import '../../../../modules/Sidebar/index';
import UserChatClick from '../../../../modules/Sidebar/index';

class UserChat extends React.Component {
    render() {

        return (
            <div>
                <div className="userChatBox" onClick={user => (
                            <UserChatClick id={user.id}/>
                        )}>
                    <div className="userNameBox">
                        <img src={this.props.img} alt="logo" className="imageStyling" />
                        {this.props.username}
                    </div>
                    <div className="chatTextBox">
                        <p className="status">{this.props.msg}</p>
                    </div>

                </div>
            <div className="line"></div>
            </div>
      );

    }
}

export default UserChat;
