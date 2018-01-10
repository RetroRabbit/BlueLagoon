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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {openMenu,closeMenu} from "../../modules/Header"
import { push } from 'react-router-redux';

const styles = theme => ({
    root: {
        height: ' 103px',
        color: '#01B9BD'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },

    images: {
        borderRadius: 50
    }
});

class MenuAppBar extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };
    settings() {
        // this.props.history.push('/settings');
    }

    render() {
        const { classes } = this.props;
        const open = Boolean(this.props.anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="relative" className="AppBarymai">
                    <Toolbar>
                        <div className={classes.flex}>
                            <div className="appbar-buttons">
                                <Button raised className={classes.button}>
                                    New Chat
                                </Button>
                                &nbsp;&nbsp;
                                <Button raised className={classes.button}>
                                    New Group
                                </Button>
                            </div>
                        </div>

                    
                            <div className="appbar-buttons-right">
                                <Button
                                    aria-owns={open && 'menu-appbar'}
                                    aria-haspopup="true"
                                    onClick={this.props.openMenu.bind(this)}
                                >
                                    <h6 id="Addie_div">Addie Hogan </h6> &nbsp;
                                    <img
                                        className={classes.images}
                                        height="60"
                                        src={img1}
                                        alt=" "
                                    />
                                </Button>

                                <Button>
                                    <img
                                        src={img2}
                                        height="60"
                                        alt=" "
                                        className={classes.images}
                                    />
                                </Button>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={this.props.anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                        width: '50'
                                    }}
                                    open={open}
                                    onClose={this.props.closeMenu.bind(this)}
                                >
                                    <MenuItem onClick={()=>(this.props.changeSettings(),this.props.closeMenu())} >Settings</MenuItem>{' '}
                                    <MenuItem onClick={()=>(this.props.logout(),this.props.closeMenu())} >Log Out</MenuItem>
                                </Menu>
                            </div>
                        
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    anchorEl: state.header.anchorEl
  })
  
const mapDispatchToProps = dispatch => bindActionCreators({
    openMenu,
    closeMenu,
    changeSettings:()=>push("/settings"),
    logout:()=>push("/auth/login")
  }, dispatch)
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(MenuAppBar));
