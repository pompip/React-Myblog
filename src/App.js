import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './Navigation';
import MarkdownEditer from './MarkdownEditer'
import Side from './Side'
import HomePage from './HomePage'
import Detail from './Detail'

import './App.css'
import Footer from './Footer';
import Game from './Game'



class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Navigation />
        <Grid container className={'content'}>
          <Grid sm={2} item></Grid> 
          <Grid item sm={6}>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/game" component={Game} />
            <Route exact path='/' component={HomePage} />
            <Route path='/markdown' component={MarkdownEditer} />
          </Grid>
          <Grid item sm={2} style={{marginLeft:10}}>
            <Side />
          </Grid>
      
        </Grid>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
