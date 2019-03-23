import React from 'react';
import { AppBar, Paper, Tabs, Tab } from '@material-ui/core';
class Navigation extends React.Component {
    state = {
        value: 1,
    };
    handleChange(event, value) {
        console.log(value)
        this.setState({value});
    }
    render() {
        return (<div>
            <AppBar position="static" >
                <Tabs indicatorColor="secondary"
                    onChange={this.handleChange}
                    value={this.state.value}
                    textColor="secondary"
                    centered>
                    <Tab label="Item One" />
                    <Tab label="Item One1" selected/>
                    <Tab label="Item One2"/>
                </Tabs>
            </AppBar>
        </div>)
    }
}

export default Navigation;