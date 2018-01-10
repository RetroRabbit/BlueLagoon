import React, { Component } from 'react';

import ChattingComponent from './ChattingComponent';
import './MainArea.css';

class MainArea extends Component {
    render() {
        return (
            <div className="MainArea">
                <ChattingComponent />
            </div>
        );
    }
}

export default MainArea;
