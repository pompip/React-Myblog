import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'


import Navigation from './Navigation';


import Side from './Side'
import HomePage from './HomePage'
import Detail from './Detail'

import './App.css'



class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Navigation />
        <Grid container className={'content'}>
          <Grid sm={2} item></Grid>
          <Grid item sm={6}>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/main" component={HomePage} />
            <Route exact path='/' component={HomePage} />
          </Grid>
          <Grid item sm={2}>
            <Side />
          </Grid>
        </Grid>

      </BrowserRouter>
    );
  }
}

export default App;
