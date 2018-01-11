import React, { Component } from 'react';

import './ChatArea.css';
import MessageLine from './MessageLine';

class ChatArea extends Component {
    constructor(e){
        super(e);
        this.state={
            messages:[
                {
                    message:"hi",
                    type:"received"
                }
            ]
        }
    }
    onTextAreaChange(e) {
        let el = e.target;
        el.style.cssText = 'height:auto; padding:10';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }
    addMessage(){
        let messa=this.state.messages;
        let el=document.getElementById("textMess");
        let obj={
            message:el.value,
            type:"sent"
        }
        messa.push(obj)
        this.setState({messages:messa})
    }

    render() {
        return (
            <div className="ChatArea">
                <div className="messages-container">
                    <div className="messages-holder">
                        
                        {this.state.messages.map((item)=>{
                            if(item.type=="sent"){
                                return <MessageLine message={item.message} />
                            }

                            return <MessageLine message={item.message} type="received" />
                        })}
                    </div>
                </div>
                <div className="writer-container">
                    <div onClick={this.addMessage.bind(this)} className="add-attachment fa fa-plus-circle" />
                    <div style={{ clear: 'both' }} />
                    <textarea
                        rows={1}
                        id="textMess"
                        onChange={this.onTextAreaChange.bind(this)}
                        className="input-message"
                        placeholder="Type a message"
                    />
                </div>
            </div>
        );
    }
}

export default ChatArea;
