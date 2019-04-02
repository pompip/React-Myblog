import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

import './App.css'

class Navigation extends React.Component {
    styles = {
        menuButton: {
            marginLeft: -18,
            marginRight: 10,
        },
        typography: {
            marginLeft: 10,
            marginRight: 10,
        }
    };

    state = {
        open: false,
        anchorEl: null
    }


    handleClose = () => {
        this.setState({ open: false })
    }

    handleMenu = (event) => {
        this.setState({ open: true, anchorEl: event.currentTarget })

    }

    render() {

        const { open, anchorEl } = this.state;
        const classes = this.styles;

        return (

            <AppBar position="fixed" className={"nav"}>
                <Toolbar variant="dense">
                    <IconButton style={classes.menuButton} color="inherit" aria-label="Menu"> <MenuIcon /> </IconButton>
                    <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>我的博客</Typography>
                    <Typography style={classes.typography} variant="inherit" color='inherit' component={Link} to="/">主页</Typography>
                    <Typography style={classes.typography} variant="inherit" color='inherit' component={Link} to="/markdown">新建</Typography>
                    <Typography style={classes.typography} color='inherit' variant="inherit" component={Link} to="/detail">关于</Typography>
                    <Typography style={classes.typography} variant="inherit"
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit">设置 </Typography>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar >
        )
    }
}
// withStyles(styles)
export default (Navigation);