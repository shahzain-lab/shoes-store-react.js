import React from 'react';
import Home from './Home'
import Product from './product';
import Header from './header'
import ContactUs from './Contact'
import {NotFound} from './NotFound'
import {ShoesItem} from './shoesItem'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

function Routered () {
    return(

        <Router>
            <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="products" element={<Product />}>
            </Route>
            <Route path="products/:id" element={<ShoesItem />}/>
            <Route  path="Contact" element={<ContactUs />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Router>
    )
} 
export default Routered;