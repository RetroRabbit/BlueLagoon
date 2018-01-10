import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import UserSettings from '../Settings/user-settings-component.js';

class Settings extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="settings-component">
                    <UserSettings />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Settings;
