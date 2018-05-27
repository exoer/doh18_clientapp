import React from "react";

// import Grid from "material-ui/Grid";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {green,red} from '@material-ui/core/colors';
import logo from '../img/aware.png'

const data = [
  {
    question: 'What went wrong?',
    answers: ["The email address of the sender wasn't correct","I felt for clickbait",  "I shouln't ever open attachments sent by mail",],
    correct: 1,
    comments: ["Be cautios of misspelled email adress.","When a title sounds too good to be true it usually is", "Be careful about attachments from unknown senders, but from known contacts it is usually safe."]
  },
  {
    question: 'When a Nigerian princess is willing to transfer $1 million to your safe European account, but first you have to transfer $1000. Would you go for it?',
    answers: [ "Sounds like an awesome deal!", "I guess this would be a scam?"],
    correct: 1,
    comments: ["A classical scam. When a deal sounds too good to be true be careful. Especially when you have to pay to get money", "Good choice"]
  }
  // {
  //   question: "Q 1. Alexander just received an email from a John More, a name that he don't know. What should he do?",
  //   answers: ["Don't open any email from any strangers", 'Open the email, but not open any lnks', 'Open the email, but look on the url if it looks legitimate'],
  //   correct: 2
  // },
  // {
  //   question: "Q 2. Which of these links in email looks most un-safe",
  //   answers: [
  //     'http://google.com/inbox/asdfkaerea/',
  //     'https://google.com/inbox/me/2311asaf',
  //   ],
  //   correct: 0
  // }
];

class Question extends React.Component {
  state = {
    value: null,
    correct: false,
    idx: null,
  }

  handleChange = event => {
    const item = this.props.item;
    const idx = item.answers.indexOf(event.target.value)
    const corr = idx === item.correct
    this.setState({ value: event.target.value, correct: corr, idx: idx }, ()=>{
      this.props.onChange(corr)
    });
  };

  render() {
    const {
      question,
      answers,
      comments,
    } = this.props.item;
    // console.log('lll', this.state)
    const color = this.state.correct ? 'primary' : 'secondary'
    return (
      <Grid item xs={12} sm={12} style={{marginBottom: 40}}>
        <Typography variant='subheading'  gutterBottom align='left'>
          {question}
        </Typography>
        <RadioGroup
            aria-label="gender"
            name="gender1"

            value={this.state.value}
            onChange={this.handleChange}
            color={color}
          >


        {answers.map(x => {
          return (
            <FormControlLabel  color={color} value={x} control={<Radio />} label={x} />
            )
          }
        )
        }
        </RadioGroup>
        {this.state.correct &&
          <Typography style={{color: green[500]}}>Correct</Typography>
        }
        {this.state.value && !this.state.correct &&
          <Typography style={{color: red[500]}}>Wrong</Typography>
        }
        {this.state.idx &&
          <Typography>{comments[this.state.idx]}</Typography>
        }
      </Grid>
    );
  }
}

class Quiz extends React.Component {

  state = {
    responses: [],
    correct: false,
  }

  handleChange = (value, i) => {
    // console.log('correct', i)
    let responses = this.state.responses
    responses[i] = value
    this.setState({responses: responses}, ()=> {
      if (responses.length > 1) {
        let correct = responses.every(x =>  x===true)
        this.setState({correct: correct})
      }
    })
  }

  handleComplete = () => {
    fetch('http://localhost:5000/complete', {
      method:'post'
    }, (x)=>{
      console.log('x', x)
    })
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', marginTop: 40, marginBottom: 40, marginLeft: 40, marginRight: 40}}>
          <Typography variant='subheading' paragraph  align='center' className='myfont'>
            Your files has been <strong>encrypted</strong>. To unlock your files you must answer the
            tutorial on ransomware questions correctly.
          </Typography>
          {
            // <div style={{paddingLeft: 40}}>
            // <img src={logo} style={{height: 80}} />
            // </div>
          }
        </div>
        {data.map((x, i) => {
          return <Question key={i} item={x} onChange={(value)=>this.handleChange(value, i)} />;
        })}
        <div style={{marginTop: 80}}>
          <Button variant='raised' color='primary' disabled={!this.state.correct} onClick={this.handleComplete}>Unlock my files</Button>
        </div>
        {this.state.correct &&
          <div>
          <Typography variant='title' style={{marginBottom: 40, marginTop: 40}}>
          Concratulations for completing the quiz.<br />
          <br />
          You could have set your company in danger by clicking on this email.<br />
          <br />
          You’re not alone - around 80 000 people fall victim to phishing scams every day globally.<br />
          <br />
          Thanks for learning more about protecting your company’s data!<br />
          </Typography>

          </div>
        }
      </div>
    );
  }
}

export default Quiz;
