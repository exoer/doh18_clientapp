import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Quiz from './components/Quiz'


class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            RansomWare Quiz
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='container' style={{paddingTop: 50}}>
      <Quiz />
      </div>
      </div>
    );
  }
}

export default App;
