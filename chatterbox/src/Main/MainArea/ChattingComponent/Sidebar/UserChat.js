import React from 'react'

  class UserChat extends React.Component {
    render() {
      return (
        <div>
            <div className="userChatBox">
                <div className="userNameBox">
                    <img src ={this.props.img} alt ="logo" className="imageStyling"/>
                    {this.props.username}
                </div>
                <div className="chatTextBox">
                        <p>{this.props.msg}</p>
                </div>
            </div>

            <div className="line"></div>
        </div>
      );
    }
  }


export default UserChat;
