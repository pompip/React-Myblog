import React from 'react';
import { Link } from 'react-router-dom'

import './App.css'
import { Typography, Button, Icon } from 'antd';
class Navigation extends React.Component {
    styles = {
        typography: {
            marginLeft: 10,
            marginRight: 10,
        }
    };


    render() {

        const classes = this.styles;


        return (
            <div style={{ display: "flex", alignItems: "center" }}>


                <Button style={classes.typography}><Icon type="bars" /></Button>


                <Typography style={{ flexGrow: 1 }}>我的博客</Typography>

                <Link to="/">
                    <Typography style={classes.typography} >主页</Typography>
                </Link>

                <Link to="/markdown">
                    <Typography.Text style={classes.typography}>新建</Typography.Text>
                </Link >

                <Link to="/detail">
                    <Typography style={classes.typography}   >关于</Typography>
                </Link>

                <Typography style={classes.typography} >设置 </Typography>


            </div>

        )
    }
}
// withStyles(styles)
export default (Navigation);