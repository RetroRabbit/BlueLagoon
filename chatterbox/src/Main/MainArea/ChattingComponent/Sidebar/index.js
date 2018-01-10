import React from 'react';
import './index.css';
import slogo from '../../../../assets/search.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserChat from './userchat';
import { SearchApi } from 'redux-search';
import { searchGo } from '../../../../modules/Sidebar';
import { searchFound } from '../../../../modules/Sidebar/index';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="outerBox">
                    <div className="searchBox">
                        <div className="search">
                            <input
                                class="searchInput"
                                placeholder="Search Chats"
                                onChange={this.props.searchGo}
                                onLoad={this.props.searchGo}
                            />
                            <img src={slogo} alt="slogo" className="fa-search" />
                        </div>
                    </div>
                    <div className="line" />

                    <div className="sidebar2 scrollbar">
                        {this.props.displayUsers.map(user => (
                            <UserChat
                                username={user.name}
                                msg={user.msg}
                                img={user.img}
                                id={user.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.sidebar.users,
    displayUsers: state.sidebar.displayUsers
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            searchGo
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
