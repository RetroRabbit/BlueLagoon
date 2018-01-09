import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pencil from 'react-icons/lib/fa/pencil';
import { Button } from 'material-ui';
import './user-settings-component.css'
import {
    editUserNameRequest,
    editUserEmailRequest,
    editUserProfilePictureRequest,
    saveChangesRequest
} from '../../../modules/settings/edit-user-reducer.js'

const SubmitChanges =  {
    backgroundColor: "#FB6902",
    height: '54px',
    width: '143px',	
    borderRadius: '5px',		
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.25)',
    color: '#FFFFFF'
}

export const editUserName = () => {
    return (
        <div className="edit-user-name">
            <input type="text" placeholder={this.props.user.firstname + " " + this.props.user.lastname} />
            <Button label="SAVE" style={SubmitChanges} children="DONE"/>
        </div>
    );
}

export const editUserEmail = () => {
    return (
        <div className="edit-user-email">
            <input type="text" placeholder={this.props.user.email} />
            <Button label="SAVE" style={SubmitChanges} children="DONE"/>
        </div>
    );
}

class UserSettings extends Component {
    render() {
        return (
            <div className="user-details">
                <div className="profile-picture">
                    <div className="oval">
                        <div className="oval-4">
                            <img 
                                src={this.props.user.profilePic} 
                                alt="none"
                                onClick={() => this.props.editUserProfilePictureRequest(this.props.user)}
                            />
                        </div>
                    </div>
                </div>

                <div className="user-name">
                    <h2 className="user-detail">{this.props.user.firstname} {this.props.user.lastname}</h2>
                    <Pencil
                        onClick={() => this.props.editUserNameRequest(this.props.user)} 
                        className="edit"
                    />
                </div>
                
                <div className="user-email">
                    <h3 className="user-detail">{this.props.user.email}</h3>
                    <Pencil
                        onClick={() => this.props.editUserEmailRequest(this.props.user)} 
                        className="edit"
                    />
                    
                </div>

                <Button  
                     onClick={() => this.props.saveChangesRequest(this.props.user)} 
                     label="DONE"
                     children="DONE"
                     style={SubmitChanges}            
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        saveChanges: state.saveChanges,
        editUserNameRequest: state.editUserNameRequest,
        editUserEmailRequest: state.editUserEmailRequest,
        editUserProfilePictureRequest: state.editUserProfilePictureRequest
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
                editUserProfilePictureRequest,
                editUserNameRequest,
                editUserEmailRequest,
                saveChangesRequest
            }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserSettings);