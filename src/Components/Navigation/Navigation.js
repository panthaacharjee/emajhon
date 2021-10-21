import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
    return (
       <nav>
           <li><Link to="/shop">Shop</Link></li>
           <li><Link to="/">Review</Link></li>
           <li><Link to="/">Manage</Link></li>
           <li><Link to="/">Inventory</Link></li>
       </nav>
    )
}

export default Navigation