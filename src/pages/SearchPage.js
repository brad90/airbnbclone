import React from 'react'
import { Button } from '@material-ui/core'
import "./SearchPage.css"
import SearchResult from "../components/SearchResult"

function SearchPage() {
   return (
      <div className="searchPage">
         <div className="searchPage__info">
            <p>
               62 stays . 2 guests
            </p>
            <h1>Stays Nearby</h1>
            <Button varient="outlined">
               Cancelation Flexability
            </Button>
            <Button varient="outlined">
               Stays Nearby
            </Button>
            <Button varient="outlined">
               Price
            </Button>
         </div>
         <div className="searchPage__results">
            <SearchResult
               img="interior1.jpg"
               location="Private Room in central London"
               title="Stay in an Edwardian House"
               description="Really nice"
               star="4.73"
               price="£30/night"
               total="£140"
            />
            <SearchResult
               img="interior1.jpg"
               location="Private Room in central London"
               title="Stay in an Edwardian House"
               description="Really nice"
               star="4.73"
               price="£30/night"
               total="£140"
            />
            <SearchResult
               img="interior1.jpg"
               location="Private Room in central London"
               title="Stay in an Edwardian House"
               description="Really nice"
               star="4.73"
               price="£30/night"
               total="£140"
            />
         </div>
         
      </div>
   )
}

export default SearchPage
