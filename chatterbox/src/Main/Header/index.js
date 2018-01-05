import React, { Component } from 'react';
import { Manager, Target, Popper } from 'react-popper';
import './index.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';

function handleClick() {
  alert('onClick triggered on the title component');
}

const style = {
  margin: 12,
  root: {
    display: 'flex',
  },
  popperClose: {
    pointerEvents: 'none',
  },
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    if(this.state.open) {
      this.setState({ open: false });
    }
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div  > 
      <AppBar  
      iconElementLeft={
        <div>
        <RaisedButton label="New Chat" primary={true} style={style} />
        <RaisedButton label="New Group" primary={true} style={style} />
      </div>
    }
      iconElementRight={
      <div> 
      <Manager>
          <Target>
            <Button
              aria-owns={this.state.open ? 'menu-list' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
          Addie Hogan
            </Button>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={"open"}
            
          >
          {(this.state.open) ?
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={"open"} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener> : null}
          </Popper>
        </Manager>
        </div>
        }
    />
      </div>
      
    );
  }
}

export default Header;  