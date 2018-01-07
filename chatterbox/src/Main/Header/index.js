import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import  './index.css'; 
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu'; 
import Button from 'material-ui/Button'; 
 
const styles = theme => ({
  root: {
    
	height:" 103px",
	width: "1440px",
	background: "#01B9BD", 
  },

  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
 
  // Raised button styles
  button: {
    margin: theme.spacing.unit,
    
  }, 
});

 class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" className="AppBarymai">
        <Toolbar>
           <div className={classes.flex}>
        <Button raised color="primary" className={classes.button}>
          New Chat
        </Button>
        
        <Button raised color="primary" className={classes.button}>
          New Group
        </Button>
       </div>
         
          {auth && (
            <div >
                 <Button
                aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
            >
          <h6 id="Addie_div">Addie Hogan </h6>
            </Button>
            
            <IconButton
              
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true" 
              color="contrast"
              
            >   
              <AccountCircle />
            </IconButton>  
            <IconButton
              
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true" 
              color="contrast"
              
            >   
              <AccountCircle />
            </IconButton> 
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

MenuAppBar.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);