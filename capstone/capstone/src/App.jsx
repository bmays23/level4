import React, {useState} from "react"
import { Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import { Anime } from "./Anime"
import Favorites from "./Favorites"
import Trailer from "./Trailer"

function App() {

  return (
    <div className="app-container">

        <nav style={{ margin: 0 }} > 
            <Link to="/Home" style={{ padding: 5 }} className='link'> 
            Home
            </Link> 
            <Link to="/Watchlist" style={{ padding: 5 }} className='link'> 
            Watchlist
            </Link>
            <Link to="/Trailer" style={{ padding: 5 }} className='link'> 
            Trailer
            </Link>
            
        </nav> 

        <Anime>
          <Routes>
              <Route path='Home' element={<Home />} />
              <Route path='Watchlist' element={<Favorites />} />
              <Route path='Trailer' element={<Trailer />} />

          </Routes>
        </Anime>

    </div> 
    
)
}

export default App
