import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import DatePicker from "../components/DatePicker"
import "./Banner.css"


function Banner() {

   const [showSearch, setShowSearch] = useState(false)
   
   return (
      <div className="banner">
         <div className="banner__search">
            <Button
               className="banner__searchButton"
               variant="outlined"
               onClick={() => setShowSearch(!showSearch)}>
               {showSearch ? "Hide" : "Show Dates"}
            </Button>
            {showSearch && <DatePicker/>}
         </div>
         <div className="banner__info">
            <h1>Get out and stretch your imagination.</h1>
            <p>Plan a differeny type of getaway to uncover hidden gems near you.</p>
            <Button variant="outlined">Explore Nearby</Button>
         </div>
      </div>
   )
}

export default Banner
