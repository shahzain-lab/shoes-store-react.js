import React from 'react'
import { shoes } from './shoe';
import { useParams, Link } from 'react-router-dom';

export const ShoesItem = () => {
    const {id} = useParams();
    const shoe = shoes[id]
    console.log(shoe)
if(!shoe){
    return(
    <img style={{width:"100vw",height:"90vh"}}  src="https://drudesk.com/sites/default/files/styles/3_front_blogs_block/public/2018-02/404-error-page-not-found.jpg?itok=JrED_bEA" alt="not found"/>
    )
}

    return (
        <div className='list'>
            <h3>Awesome choise</h3>
            
            <div className="shoes">
                <h2>{shoe.name}</h2>
                <img src={shoe.img}alt="shoes" height={450}/>
              </div>
              <Link to="/product">Back to products</Link>
        </div>
    )
}
