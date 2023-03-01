import React, {useContext} from "react"
import { DataContext } from "./Anime"


function Favorites(props) {

    const {favAnime} = useContext(DataContext)

    return (
        <div>
            {favAnime.map(anime => (
                <>
                <img src={anime.randomAnime} />
                <h2>{anime.title}</h2>
                <h4>{anime.rating}</h4>
                </>

            ))}
        </div> 
        
    )
}

export default Favorites