import React from 'react'
import StarRatings from 'react-star-ratings';
 

const Ratting = (props) => {
    return (
        <>
             <StarRatings
                rating={props.rate}
                starRatedColor="#fdcc0d"
                numberOfStars={5}
                name='rating'
                starDimension="30px"
                starSpacing="5px"
            />
        </>
    )
}

export default Ratting
