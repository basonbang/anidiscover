import { useEffect, useState } from 'react'
import BanList from './components/BanList';
import DiscoverContainer from './components/DiscoveryContainer';
import axios from 'axios';
import './App.css'

function App() {
  
  const [banList, setBanList] = useState();
  const [currentAnime, setCurrentAnime] = useState({});

  const makeQuery = () => {

  }

  const banGenre = () => {

  }

  const callAPI = async (query) => {
    const response = await axios.get("https://api.jikan.moe/v4/anime?sfw&page=1&min_score=7&genres_exclude=");
    // const response = await axios.get(query);

    const randomNumber = Math.floor(Math.random() * 25);
    const randomAnime = response.data.data[randomNumber];

    const title = randomAnime.title_english || randomAnime.title

    const genres = randomAnime.genres
  
    let genreArray = [];

    // add each genre's ID and name to an array to be stored in state
    genres.forEach(element => {
      genreArray = [...genreArray, {id: element.mal_id, name: element.name}]
    });

    const image = randomAnime.images.jpg.image_url

    setCurrentAnime( prevState => ({
      ...prevState,
      title: title,
      genres: genreArray,
      image: image
    }))

  }


  return (
    <div>
      <h1>AniDiscover</h1>
      <h2>Explore tailored anime selections by excluding certain genres.</h2>
      <DiscoverContainer anime={currentAnime} banGenre={banGenre} fetchAnime={callAPI}/>
      <BanList/>
    </div>
  )
}

export default App
