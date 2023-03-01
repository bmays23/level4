import React, { useContext } from "react"
import { DataContext } from "./Anime"

function Home() {

    const {anime, getNewAnime, handleSubmit} = useContext(DataContext)

    return (
        <div>
       <img src={anime.randomAnime} />
       <h2>{anime.title}</h2>
       <h4>{anime.rating}</h4>
       <p>{anime.synopsis}</p>
       <button
          onClick={getNewAnime}
        >
          Check out this anime!
        </button>
        <form>
            <button 
                onClick={handleSubmit}
            >
                Add to Watchlist
            </button>
        </form>
    </div>
        
    )
}

export default Home