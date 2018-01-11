import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './index.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    openMenu,
    handleHeaderInChat,
    closeMenu,
    openSearch,
    closeSearch
} from '../../modules/Header';
import { push } from 'react-router-redux';
import logo from '../../assets/Icon.png';

class MenuAppBar extends React.Component {
    gotoSettings() {
        this.props.closeMenu();
        this.props.changeSettings();
    }
    gotoLogout() {
        this.props.closeMenu();
        this.props.logout();
    }
    render() {
        return (
            <div className="Header">
                {this.props.phonemode &&
                    this.props.phonemodechat && (
                        <div
                            onClick={() => this.props.handleHeaderInChat(false)}
                            className="header-return-chats"
                        >
                            <div className="resized-arrow fa fa-chevron-left" />
                            <div className="header-resized-text">CHATS</div>
                        </div>
                    )}
                {(!this.props.phonemode || !this.props.phonemodechat) && (
                    <div
                        onMouseLeave={this.props.closeSearch.bind(this)}
                        className={`buttons-section ${this.props.windowSizeClass}`}
                    >
                        <Button
                            id="new_chatBTN"
                            onMouseOver={this.props.openSearch.bind(this)}
                            raised
                            className="buttons"
                        >
                            NEW CHAT
                        </Button>  
                        <Button raised className="buttons">
                            NEW GROUP
                        </Button>
                    </div>
                )}

                <div>
                    {(!this.props.phonemode ||
                        (this.props.phonemode && this.props.phonemodechat)) && (
                        <div
                            onMouseLeave={this.props.closeMenu.bind(this)}
                            className={`profile-section ${this.props.windowSizeClass}`}
                        >
                            <div
                                onMouseOver={this.props.openMenu.bind(this)}
                                onClick={this.props.openMenu.bind(this)}
                                className="profile-section-id-holder"
                            >
                                <div className="profile-section-id-name">
                                    {this.props.user.name}
                                </div>
                                <div className="profile-img-holder">
                                    <img
                                        className="profile-img profile-user-img"
                                        src={this.props.user.profilePic}
                                    />
                                </div>
                            </div>
                            <div className="profile-section-logo">
                                <div className="profile-img-holder">
                                    <img className="profile-img profile-logo" src={logo} />
                                </div>
                            </div>
                            {this.props.anchorEl && (
                                <div
                                    onMouseOver={this.props.openMenu.bind(this)}
                                    onMouseLeave={this.props.closeMenu.bind(this)}
                                    className="header-dropdown-menu"
                                >
                                    <div className="header-drop-item">
                                        <div
                                            onClick={this.gotoSettings.bind(this)}
                                            className="header-drop-item-name"
                                        >
                                            Settings
                                        </div>
                                    </div>
                                    <div className="header-drop-item">
                                        <div
                                            onClick={this.gotoLogout.bind(this)}
                                            className="header-drop-item-name"
                                        >
                                            Log Out
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {this.props.phonemode &&
                        !this.props.phonemodechat && (
                            <div
                                onClick={() => this.props.handleHeaderInChat(true)}
                                className={`profile-section ${this.props.windowSizeClass}`}
                            >
                                <div className="resized-arrow fa fa-chevron-right" />
                            </div>
                        )}
                </div>
                {this.props.searchShow && (
                    <div
                        onMouseEnter={this.props.openSearch.bind(this)}
                        onMouseLeave={this.props.closeSearch.bind(this)}
                        className="searchBox"
                    >
                        <div className="search">
                            <input
                                class="searchInput"
                                placeholder="friend's email"
                                onChange={this.props.searchGo}
                                onLoad={this.props.searchGo}
                            />
                            <div className="search-icon" class="fa fa-search" />
                        </div>
                        <div className="line" />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    anchorEl: state.header.anchorEl,
    windowSizeClass: state.responsive.windowSizeClass,
    phonemode: state.responsive.phonemode,
    phonemodechat: state.responsive.phonemodechat,
    searchShow: state.header.searchShow,
    user: state.edituser
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            openMenu,
            closeMenu,
            openSearch,
            closeSearch,
            handleHeaderInChat,
            changeSettings: e => push('/settings'),
            logout: e => push('/auth/login')
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);
