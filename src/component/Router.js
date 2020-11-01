import React from 'react';
import Home from './Home'
import Product from './product';
import Header from './header'
import ContactUs from './Contact'
import {NotFound} from './NotFound'
import {ShoesItem} from './shoesItem'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function Routered () {
    return(

        <Router>
            <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product" component={Product}/>
                <Route path="/product/:id" component={ShoesItem}/>
            
            <Route exact path="/Contact" component={ContactUs}/>
            <Route path="*" component={NotFound}/>
            <Route path="/product/:*" component={NotFound}/>
          </Switch>
        </Router>
    )
} 
export default Routered;