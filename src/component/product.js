import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css'
import Grid from '@material-ui/core/Grid';
import {shoes} from './shoe';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Product() {
  const classes = useStyles();
  console.log(shoes)

  return (
    <div className={classes.root} /*style={{backgroundImage: "url('https://images-na.ssl-images-amazon.com/images/I/61TjTfcelPL._AC_UL1486_.jpg')"}}*/>

    <Grid item xs={12}>
   <div className='list'>
          {Object.keys(shoes).map(keyType => {
            const shoe = shoes[keyType];
            return(
              <Link  key={keyType}  to={`/product/${keyType}`} className="shoes">
                <h3>{shoe.name}</h3>
                <img src={shoe.img} height={200}/>
              </Link>
            )
          })}
        </div>
        </Grid>
        
    </div>

  );
}
