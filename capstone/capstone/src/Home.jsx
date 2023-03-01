import React, { useContext } from "react"
import { DataContext } from "./Anime"

function Home() {

    const {anime, getNewAnime, handleSubmit} = useContext(DataContext)

    return (
        <div className="anime-container">
       <img src={anime.randomAnime} />
       <h2>{anime.title}</h2>
       <h4>{anime.rating}</h4>
       <p>{anime.synopsis}</p>
       <button
          onClick={getNewAnime}
          className="randomize-button"
        >
          
        </button>
        <form>
            <button 
                onClick={handleSubmit}
                className="add-button"
            >
                Add to Watchlist
            </button>
        </form>
    </div>
        
    )
}

export default Home