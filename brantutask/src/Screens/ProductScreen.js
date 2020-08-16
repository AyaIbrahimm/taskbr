import React from 'react'
import data from '../data'
import {Link} from 'react-router-dom'
function ProductScreen (props) {
    console.log(props.match.params.id)
    const product = data.products.find(x => x._id=== props.match.params.id);
    return <div>
        <div className="back-to-home">
            <Link to="/"style={{ color: '#000' }}> Back to Homepage</Link>
        </div> 
        <div className="details"> 
          <div className="details-image">
              <img src={product.image} alt="product"></img>
           </div>  
           <div className="details-info">
               <ul>
                   <li>
                      <h4> {product.name}</h4>
                   </li>
                   <li>
                      Price: <b>{product.price}</b>
                   </li>
                   <li>
                      Brand: <b>{product.brand}</b>
                   </li>
               </ul>
               </div>
           </div>
    </div>
}

export default ProductScreen;