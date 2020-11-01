import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Contact.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    color: theme.palette.text.secondary,
  },
  icon: {
    padding: theme.spacing(25),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: "#4B4D4E ",
  }
}));

export default function ContactUs() {
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={6}>
          <Paper className={classes.icon}>
              <div>
              <i className="fa fa-envelope-open" aria-hidden="true"></i>
              <h4 className='heading'>If you have a question or just want to get in touch use the form.We look forward to hearing from you.</h4>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <div>
                  <form className="form" onSubmit={onSubmit}>
                      <label>UserName</label>
                      <br />
                      <input placeholder="Enter your username"className="input" type="text"/>
                      <br />
                      <label>Comments</label><br />
                      <textarea type="checkbox"  placeholder="type feedback"/>
                      <input type="submit" value="Submit" className="submit"/>
                  </form>
              </div>

          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
