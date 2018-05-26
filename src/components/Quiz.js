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

const data = [
  {
    question: "Alexander just received an email from a John More, a name that he don't know. What should he do?",
    answers: ['Not open any email from any strangers', 'Open the email, but not open any lnks', 'Open the email, but look on the url if it looks legitimate'],
    correct: 2
  },
  {question: "Which of these links in email looks unsafe?",
  answers: ['http://google.com/inbox/asdfkaerea/', 'https://google.com/inbox/me/2311asaf'],
  correct: 1
  }
];

class Question extends React.Component {
  state = {
    value: null,
    correct: false
  }

  handleChange = event => {
    const item = this.props.item;
    const corr = item.answers.indexOf(event.target.value) === item.correct
    this.setState({ value: event.target.value, correct: corr }, ()=>{
      this.props.onChange(corr)
    });
  };

  render() {
    const {
      question,
      answers
    } = this.props.item;
    const color = this.state.correct ? 'primary' : 'secondary'
    return (
      <Grid item xs={12} sm={12}>
        <Typography variant='title'  gutterBottom align='left'>
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
          return <FormControlLabel  color={color} value={x} control={<Radio />} label={x} />
          }
        )
        }
        </RadioGroup>
        {this.state.correct &&
          <div>correct</div>
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
      <Grid container spacing={24}>
        <Typography paragraph>
          Your file has been encrypted. To unlock your files you must answer the
          tutorial on ransomware questions correctly.
        </Typography>
        {data.map((x, i) => {
          return <Question key={i} item={x} onChange={(value)=>this.handleChange(value, i)} />;
        })}
        <div style={{marginTop: 80}}>
          <Button variant='raised' color='primary' disabled={!this.state.correct} onClick={this.handleComplete}>Unlock my files</Button>
        </div>
      </Grid>
    );
  }
}

export default Quiz;
