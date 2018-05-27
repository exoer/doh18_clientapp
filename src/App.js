import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Quiz from './components/Quiz'
import logo from './img/aware2.png'
import meme from './img/meme_1.jpg'
// import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      {
        // <AppBar position="static" color="default">
        // <Toolbar>
        // <img src={logo} style={{height: 90, paddingRight: 10}} />
        // <Typography variant="title" color="default">
        //
        // </Typography>
        // </Toolbar>
        // </AppBar>

      }
      <div className='container' style={{paddingTop: 50}}>
        <div>
          <img src={logo} style={{height: 90, paddingRight: 10, paddingBottom: 40}} />
        </div>
        <div className='center' style={{marginTop: 40, marginBottom: 40}}>
          <img src={meme} className='center' />
        </div>
        <div>

        </div>
        <Quiz />

        </div>
        <div style={{marginTop: 100}}></div>
      </div>
    );
  }
}

export default App;
