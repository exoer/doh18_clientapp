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
        <Typography variant='title' style={{marginBottom: 40}}>
        Oh no! You could have set your company in danger by clicking on this email.<br />
<br />
You’re not alone - around 80 000 people fall victim to phishing scams every day globally.<br />
<br />
Take a closer look at the email address this file was sent from - it had your co-workers name misspelled. This is a common phishing scheme where employees are allured to download malware into their computer.<br />
<br />
This malware can encrypt your files. When you open the presentation file in your computer, you can see what encryption looks like.<br />
<br />
We want to make sure you’re protected against these attacks in the future. To decrypt this file, answer the couple of questions below.<br />
<br />
Thanks for protecting your company’s data!<br />
        </Typography>
        </div>
        <Quiz />

        </div>
        <div style={{marginTop: 100}}></div>
      </div>
    );
  }
}

export default App;
