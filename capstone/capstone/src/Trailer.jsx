import React, { useContext } from "react"
import { DataContext } from "./Anime"

function Trailer(props) {

    const {favAnime} = useContext(DataContext)

    return (
        <div>
            {favAnime.map(anime => (
                <>
                <iframe src={anime.trailer}>
                </iframe>
                
                </>

            ))}
        </div>
        
    )
}

export default Trailer