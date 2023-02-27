import React, {useState} from "react"

function App() {

  const [anime, setAnime] = useState({
    title: "",
    rating: "",
    randomAnime: ""
  })
  const [allAnime, setAllAnime] = useState([])

  React.useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
        .then(res => res.json())
        .then(data => setAllAnime(data.data))
}, [])


  console.log(allAnime)
  
  function getNewAnime() {

    const randomNumber = Math.floor(Math.random() * allAnime.length)
    const image = allAnime[randomNumber].images.jpg.image_url
    const rating = allAnime[randomNumber].rating


    setAnime(prevAnime => ({
      ...prevAnime,
        randomAnime: image,
        rating: rating
    }))
    
}



  return (
    <div>
       <img src={anime.randomAnime} />
       <h2>{anime.rating}</h2>
       <button
          onClick={getNewAnime}
        >
          Check out this anime!
        </button>
    </div>
  )
}

export default App
