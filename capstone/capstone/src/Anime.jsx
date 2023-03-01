import React, {createContext, useState} from "react"

const DataContext = createContext()

function Anime(props) {

    const [anime, setAnime] = useState({
      randomAnime: "",
      title: "",
      rating: "",
      synopsis: "",
      trailer: ""
    })
    const [allAnime, setAllAnime] = useState([])
    const [favAnime, setFavAnime] = useState([])
  
    React.useEffect(() => {
      fetch("https://api.jikan.moe/v4/anime")
          .then(res => res.json())
          .then(data => setAllAnime(data.data))
  }, [])
  
  
    console.log(allAnime)
    
    function getNewAnime() {
  
      const randomNumber = Math.floor(Math.random() * allAnime.length)
      const image = allAnime[randomNumber].images.jpg.image_url
      const title = allAnime[randomNumber].title
      const rating = allAnime[randomNumber].rating
      const synopsis = allAnime[randomNumber].synopsis
      const trailer = allAnime[randomNumber].trailer.embed_url
  
      setAnime(prevAnime => ({
        ...prevAnime,
          randomAnime: image,
          title: title,
          rating: rating,
          synopsis: synopsis,
          trailer: trailer
      }))
      
  }

  function handleSubmit(e) {
    e.preventDefault()
    setFavAnime(prevState =>([
        ...prevState,
        anime
    ]))
  }

  function deleteAnime() {
    let arr = favAnime.slice(0, -1)
    setFavAnime(arr)
} 

  
    return (
    <DataContext.Provider
    value={{
        anime, allAnime, favAnime, setAllAnime, getNewAnime, handleSubmit, deleteAnime
    }}>
        {props.children}


    </DataContext.Provider>
          
    )
  }
  
  export {DataContext, Anime}