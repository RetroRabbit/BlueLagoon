import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pencil from 'react-icons/lib/fa/pencil';

import { Button, TextField } from 'material-ui';
import './user-settings-component.css';
import { push } from 'react-router-redux';

import {
    editUserName,
    editUserEmail,
    editProfilePicture,
    saveChanges,
    updateUserName,
    updateUserEmail
} from '../../../modules/settings/user-actions';

const buttonStyle = {
    backgroundColor: '#FB6902',
    height: '54px',
    width: '143px',
    borderRadius: '5px',
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.25)',
    color: '#FFFFFF'
};

const TextFieldStyles = {
    width: '100%',
    fontFamily: 'Montserrat'
};

class UserSettings extends Component {
    renderNormal() {
        return (
            <div>
                <div className="settings-label user-name">
                    <h2 className="settings-label-name settings-label-heading user-detail">
                        {this.props.user.name}
                    </h2>
                    <Pencil
                        onClick={() => this.props.editUserName(this.props.user)}
                        className="edit"
                    />
                </div>

                <div className="settings-label user-email">
                    <h3 className="settings-label-email settings-label-heading user-detail">
                        {this.props.user.email}
                    </h3>
                    <Pencil
                        onClick={() => this.props.editUserEmail(this.props.user)}
                        className="edit"
                    />
                </div>
            </div>
        );
    }
    done() {
        this.props.saveChanges(this.props.user);
        this.props.done();
    }
    renderEditName() {
        return (
            <div>
                <div className="user-name">
                    <TextField
                        defaultValue={this.props.user.name}
                        style={TextFieldStyles}
                        onChange={e => this.props.updateUserName(e, this.props.user)}
                    />
                    <Pencil
                        onClick={() => this.props.editUserName(this.props.user)}
                        className="edit"
                    />
                </div>

                <div className="user-email">
                    <h3 className="user-detail">{this.props.user.email}</h3>
                    <Pencil
                        onClick={() => this.props.editUserEmail(this.props.user)}
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
                    <h2 className="user-detail">{this.props.user.name}</h2>
                    <Pencil
                        onClick={() => this.props.editUserName(this.props.user)}
                        className="edit"
                    />
                </div>

                <div className="user-email">
                    <TextField
                        defaultValue={this.props.user.email}
                        style={TextFieldStyles}
                        onChange={e => this.props.updateUserEmail(e, this.props.user)}
                    />
                    <Pencil
                        onClick={() => this.props.editUserEmail(this.props.user)}
                        className="edit"
                    />
                </div>
            </div>
        );
    }

    render() {
        let renderUserDetails = this.renderNormal();

        if (this.props.user.editName) {
            renderUserDetails = this.renderEditName();
        } else if (this.props.user.editEmail) {
            renderUserDetails = this.renderEditEmail();
        }

        return (
            <div className="user-details">
                <div className="profile-picture">
                    <div className="oval">
                        <div className="oval-4">
                            <img
                                src={this.props.user.profilePic}
                                alt="none"
                                onClick={() => this.props.editProfilePicture(this.props.user)}
                            />
                        </div>
                    </div>
                </div>

                {renderUserDetails}

                <Button onClick={() => this.done()} children="DONE" style={buttonStyle} />
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
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            editUserName: editUserName,
            editUserEmail: editUserEmail,
            editProfilePicture: editProfilePicture,
            saveChanges: saveChanges,
            updateUserName: updateUserName,
            updateUserEmail: updateUserEmail,
            done: () => push('/')
        },
        dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(UserSettings);
