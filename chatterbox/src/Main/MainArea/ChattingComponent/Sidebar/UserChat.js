import React from 'react'

function UserChat(props) {
    return(
        <div>
      <div className="userChatBox">
        <div className="userNameBox">
            <img src ={props.img} alt ="logo" className="imageStyling"/>
            {props.username}  
        </div>
        <div className="chatTextBox">
                <p>{props.msg}</p>  
        </div>
    </div>
    
    <div className="line"></div> 
    </div>
    
    );
  }


export default UserChat;