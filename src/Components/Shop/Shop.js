import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Product from '../Products/Product'
import "./Shop.css"

const Shop = (props) => {
    const first10= props.data.slice(0, 10);
    const [cart, setCart]=useState([]);
    const handleAddProduct=(pro)=>{
        const newCart = [...cart, pro];
        setCart(newCart)
        
    }
    let ship = 0;
    if(cart.length<=2){
         ship = 17.89;
    }else if(cart.length<=5){
        ship = 25.50;
    }else{
         ship = 30.00;
    }
    const Price = cart.reduce((total, prd)=>total+prd.price, 0).toFixed(2);
    const totalPrice = (parseFloat(Price) + parseFloat(ship)).toFixed(2);
    return (
        
           <div className="shop">
               <div className="shop-container">
                    {first10.map((val, ind)=>{
                            return <Product 
                                val={val} 
                                key={ind} 
                                handleAddProduct={handleAddProduct}
                            />
                        })}
                </div>
                <div className="cart-container">
                    <h3>This is cart </h3>
                    <h4>Order Summary : {cart.length}</h4>
                    <h4>Product Price : ${Price}</h4>
                    <h4>Shipping : ${ship}</h4>
                    <h4>Total Price : ${totalPrice}</h4>
                    <Link to="/review">Product Review</Link>
                </div>
           </div>
        

    )
}

export default Shop
