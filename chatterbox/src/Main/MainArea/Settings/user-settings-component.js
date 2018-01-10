import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pencil from 'react-icons/lib/fa/pencil';
import { Button, TextField } from 'material-ui';
import './user-settings-component.css'
import {
    editUserName,
    editUserEmail,
    editProfilePicture,
    saveChanges
} from '../../../modules/settings/user-actions'

const buttonStyle =  {
    backgroundColor: "#FB6902",
    height: '54px',
    width: '143px',	
    borderRadius: '5px',		
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.25)',
    color: '#FFFFFF'
}

const TextFieldStyles = {
    width: '100%'
}

class UserSettings extends Component {
    renderNormal() {
        return (
            <div>
                <div className="user-name">
                    <h2 className="user-detail">{this.props.user.user.name}</h2>
                    <Pencil
                        onClick={() => this.props.editUserName(this.props.user.user)}
                        className="edit"
                    />
                </div>
                
                <div className="user-email">
                    <h3 className="user-detail">{this.props.user.user.email}</h3>
                    <Pencil
                        onClick={() => this.props.editUserEmail(this.props.user.user)}
                        className="edit"
                    />
                </div>
            </div>
        );
    }

    renderEditName() {
        return (
            <div>
                <div className="user-name">
                    {/* USE TEXTFIELD HERE */}
                    <TextField  
                        defaultValue={this.props.user.user.name} 
                        refs="newName"
                    />
                </div>
                
                <div className="user-email">
                    <h3 className="user-detail">{this.props.user.user.email}</h3>
                    <Pencil
                        onClick={() => this.props.editUserEmail(this.props.user.user)}
                        className="edit"
                    />
                </div>
            </div>
        );
    }

    renderEditEmail() {
        return (
            <div>
                <div className="user-name">
                    <h2 className="user-detail">{this.props.user.user.name}</h2>
                    <Pencil
                        onClick={() => this.props.editUserName(this.props.user.user)}
                        className="edit"
                    />
                </div>
                
                <div className="user-email">
                    <TextField  
                        defaultValue={this.props.user.user.email}
                        ref="newEmail" 
                    />
                </div>
            </div>
        );
    }

    render() {
        console.log(this.props)

        let renderUserDetails = this.renderNormal();

        if(this.props.user.editName) {
            renderUserDetails = this.renderEditName();
        }
        else if(this.props.user.editEmail) {
            renderUserDetails = this.renderEditEmail();
        }

        return (
            <div className="user-details">
                <div className="profile-picture">
                    <div className="oval">
                        <div className="oval-4">
                            <img 
                                src={this.props.user.user.profilePic} 
                                alt="none"
                                onClick={() => this.props.editProfilePicture(this.props.user.user)}
                            />
                        </div>
                    </div>
                </div>

                {renderUserDetails}

                <Button 
                    onClick={() => this.props.saveChanges(this.props.user.user)}
                    children="DONE"
                    style={buttonStyle}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.edituser,
        editName: state.edituser.editName,
        editEmail: state.edituser.editEmail,
        editProfilePic: state.edituser.editProfilePic,
        changesMade: state.edituser.changesMade
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        editUserName: editUserName,
        editUserEmail: editUserEmail,
        editProfilePicture: editProfilePicture,
        saveChanges: saveChanges
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserSettings);