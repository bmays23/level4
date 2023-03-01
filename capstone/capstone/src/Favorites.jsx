import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "./Anime"


function Favorites(props) {
    const navigate = useNavigate()
    const {favAnime, deleteAnime} = useContext(DataContext)

    return (
        <div className="anime-container">
            {favAnime.map(anime => (
                <>
                <img src={anime.randomAnime} />
                <h2>{anime.title}</h2>
                <h4>{anime.rating}</h4>
                <button onClick={()=> navigate("/Trailer")} className="trailer-button">Check out this trailer!</button>
                <button onClick={deleteAnime} className="delete-button">X</button>
                </>

            ))}
        </div> 
        
    )
}

export default Favorites