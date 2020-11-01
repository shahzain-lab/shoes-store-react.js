import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'; 

export default function Header() {
 return (
   <div>
   <div className="Menu">
     <h3>Shoes Store</h3>
     <ul className="appBar">
       
       
     <Link to="/"><li >Home</li> </Link> 
     <Link to="/product"><li>Product</li></Link> 
     <Link to="/contact"><li>Contact</li></Link> 
     
     </ul>  
     </div>
     
       
       </div>
     
     
   
 )
}