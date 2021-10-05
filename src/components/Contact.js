import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Contact.css'
import { useNavigate } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(16),
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
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  }
  return (
    <div className={classes.root}>
      <Grid container md={12} className={classes.paper} spacing={3}>
                  <form className="form" onSubmit={onSubmit}>
                      <label>UserName</label>
                      <br />
                      <input placeholder="Enter your username"className="input" type="text"/>
                      <br />
                      <label>Comments</label><br />
                      <textarea type="checkbox"  placeholder="type feedback"/>
                      <input type="submit" value="Submit" className="submit"/>
                  </form>
      </Grid>
    </div>
  );
}
