import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//css
import './Home.css';
//router
import {Link} from 'react-router-dom';
//button
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(35),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img : {
      width:'100%',
      height: '100%'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      
        <Grid item xs={6}>
            <img className={classes.img} src="https://images.ctfassets.net/od02wyo8cgm5/4YD7w2SVAdaG1evg389XT9/ef70512e22f03621e3e8d52a31dec42f/cloud_x_2-fw20-white_black-w-g6.png"alt="Shoes"/>
        </Grid>
        <Grid item xs={6}>
            <div className="rightSide">
            <h3>Shoes Store</h3>
            <h5>We have best product for you with multiple styles<br /> Choose your own style</h5>
            <Button variant="contained" color="primary"style={{margin:'20px'}} disableElevation >
            
            <Link className='mainButton' to="/product">Visit Product</Link>
    </Button>
            </div>         
        </Grid>
        
      </Grid>
    </div>
  );
}
