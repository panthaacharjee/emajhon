import React from 'react'
import "./Product.css"
import Ratting  from '../Rattings/Ratting';

const Product = (props) => {
    const fakeData = props.val;
    return (
        <div className="product">
                <img src={fakeData.image} alt={fakeData.image}/>
                <div className="details">
                    <h4>{fakeData.title}</h4>
                    <p>${fakeData.price}</p>
                    <span>Rating :  {<Ratting rate={fakeData.rating.rate}/>}</span>
                    <p>Stock In : {fakeData.rating.count}</p>
                    <button onClick={()=>props.handleAddProduct(fakeData)}><i className="fas fa-shopping-cart"></i> add to cart</button>
                </div>
        </div>
    )
}

export default Product
