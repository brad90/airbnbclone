import React, {useEffect, useState} from 'react'
import "./Card.css"

function Card({ src, title, description, price }) {

   const image = require('../assets/images/' + src).default

   return (
      <div className="card">
         <img src={image} alt=""/>
         <div className="card__info">
            <h2>{title}</h2>
            <h4>{description}</h4>
         </div>
      </div>
   )
}

export default Card
