import React from 'react';
import { AppBar,Paper, Tabs, Tab } from '@material-ui/core';
class Navigation extends React.Component {

    state = {
        select: 0,
    };
    handleChange = (event, value) => {
        this.setState({ select:value });
        console.log(this)
      };
    render() {
        return (
            <AppBar position="static"  >
                <Tabs 
                    onChange={this.handleChange}
                    value={this.state.select}
                    centered
                    >
                    <Tab label="Item One" />
                    <Tab label="Item One1" />
                    <Tab label="Item One2"/>
                </Tabs>
            </AppBar>
        )
    }
}

export default Navigation;