import React from 'react'
import "./SearchResult.css"
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"

function SearchResult({
   img,
   location,
   title,
   description,
   star,
   price,
   total
}) {
   const image = require('../assets/images/' + img).default


   return (
      <div className="searchResult">
         <img src={image} alt="" />
         <FavouriteBorderIcon className="searchResult__heart"/>
         <div className="searchResult__info">
            <div className="searchResult__infoTop">
               <p>{location}</p>
               <h3>{title}</h3>
               <hr />
               <p>{description}</p>
            </div>
            <div className="searchResult__infoBottom">
               <StarIcon className="searchResult__star" />
               <p><strong>{star}</strong></p>
            </div>
            <div className="searchResult__price">
               {price}
               {total}
            </div>
         </div>
         
      </div>
   )
}

export default SearchResult
