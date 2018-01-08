import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import  './index.css';  
import Oval from '../../assets/Oval.png'
import Oval_2 from '../../assets/Oval_2.png'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar'; 
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu'; 
import Menu, { MenuItem } from 'material-ui/Menu'; 
import Button from 'material-ui/Button';  
 
const styles = theme => ({
  root: {
    
	height:" 103px",
	width: "1440px",
  },

  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20, 
  },
 
  // // Raised button styles
  // button: {
  //   margin: theme.spacing.unit,  
  // }, 

  images: {
    borderRadius: 50,
  }
 
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
          
           <div className={classes.flex} color="#01B9BD" >
           
        <Button  raised  className={classes.button}
               >
          New Chat
        </Button>
        &nbsp;&nbsp;
        <Button raised  className={classes.button}>
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
          <h6 id="Addie_div">Addie Hogan </h6>&nbsp;&nbsp; 
           <img className={classes.images}  height="60" src={Oval}  alt=" "  />
            </Button>
               
            <Button
              
              aria-owns={open ? 'menu-appbar' : null} 
              color="contrast"
              
            >    
             <img src={Oval_2}  height="60"  alt=" " className={classes.images}  />
            </Button > 
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