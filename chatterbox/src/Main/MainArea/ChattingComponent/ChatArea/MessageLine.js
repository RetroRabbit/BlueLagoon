import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageLine extends Component {
    constructor(e) {
        super(e);
        let chr = this.props.type.toLowerCase().charAt(0);
        let type;
        if (chr == 's') {
            type = 'sent';
        } else if (chr == 'r') {
            type = 'received';
        }
        this.state = {
            type: type
        };
    }

    props: {
        message?: ?string,
        time?: ?string,
        type?: ?string
    };

    static propTypes = {
        message: PropTypes.string,
        time: PropTypes.string,
        type: PropTypes.string
    };
    static defaultProps = {
        type: 'sent'
    };

    render() {
        return (
            <div className="MessageLine">
                <div className={`message message-${this.state.type}`}> {this.props.message}</div>
                <div className="message-line-clear" />
                <div className={`message-time message-time-${this.state.type}`}>7:45</div>
                <div className="message-line-clear" />
            </div>
        );
    }
}

export default MessageLine;
