import React, { useEffect, useState } from 'react'
import Shop from '../Shop/Shop';

const ProductData = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setData(json) })
    },[]);
    const suffle=(a)=>{
        for(let i=a.length; i; i--){
            let j = Math.floor(Math.random()*i);
            [a[i-1], a[j]] = [a[j],a[i-1]];
        }
    }
    suffle(data);
    
    return (
        <Shop data={data}/>
    )
}

export default ProductData
