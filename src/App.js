import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './main';
import { Grid } from '@material-ui/core'
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div style={{flexGrow:1}}>

  
        <Grid container justify="center"  alignItems="flex-end">
          <Grid item xl ={8} sm={12}>
          <Navigation item xs={12}   />
          </Grid>
          <Grid item xs={8}>
            <Main  item xs={12} />
          </Grid>
          <Grid item xs={8} >
          <Footer />
          </Grid>
        </Grid>
     
       </div>
    );
  }
}

export default App;
