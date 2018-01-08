import React, {Component} from 'react';
import {MuiThemeProvider} from 'material-ui';
import UserSettings from '../../containers/settings/'

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