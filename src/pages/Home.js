import React from 'react'
import "./Home.css"
import Card from "../components/Card.js"

import Banner from "../components/Banner"

function Home() {
   return (
      <div className="home">
         <Banner />
         <div className="home__section">
            <Card
               src="image-bali.jpg"
               title="Experience Something 1"
               description= "This is something awesome you would like to buy"
            />
            <Card
               src="image-scotland.jpg"
               title="Experience Something 2"
               description= "This is something awesome you would like to buy"
            />
            <Card
               src="image-scotland.jpg"
               title="Experience Something 3"
               description= "This is something awesome you would like to buy"
            />
         </div>
         <div className="home__section">
            <Card
               src="image-scotland.jpg"
               title="Experience Something 2"
               description= "This is something awesome you would like to buy"
            />
            <Card
               src="image-scotland.jpg"
               title="Experience Something 2"
               description= "This is something awesome you would like to buy"/>
            <Card
               src="image-scotland.jpg"
               title="Experience Something 2"
               description= "This is something awesome you would like to buy"/>
         </div>
      </div>
   )
}

export default Home
