import { useEffect, useState } from 'react'
import BanList from './components/BanList';
import SearchHistory from './components/SearchHistory';
import Header from './components/Header';
import DiscoverContainer from './components/DiscoveryContainer';
import axios from 'axios';
import './App.css'

function App() {
  
  const [banList, setBanList] = useState([]);
  const [currentAnime, setCurrentAnime] = useState({});

  const banGenre = (id, name) => {
    
    // check if genre is already present in the banList array
    const genreIsPresent = banList.some(genre => genre.name === name)
    
    // Genre is not present, update banList array
    if (!genreIsPresent) {
      setBanList([...banList, {
        id: id,
        name: name
      }])
    } 
  }
  
  const removeBannedGenre = (genre) => {
    
    const indexOfGenre = banList.indexOf(genre);
    
    setBanList([...banList.slice(0, indexOfGenre), ...banList.slice(indexOfGenre+1)])
  }

  const makeQuery = () => {

    let excludedGenres = "";

    banList.forEach((genre) => {
      excludedGenres += `${genre.id},`
    })

    let query = `https://api.jikan.moe/v4/anime?sfw&page=1&min_score=7&genres_exclude=${excludedGenres}`
  
    return query;
  }

  const callAPI = async () => {
    const queryString = makeQuery();

    const response = await axios.get(queryString);

    const randomNumber = Math.floor(Math.random() * 25);
    const randomAnime = response.data.data[randomNumber];

    const id = randomAnime.mal_id;
    const title = randomAnime.title_english || randomAnime.title

    const genres = randomAnime.genres
    const themes = randomAnime.themes
  
    let genreArray = [];

    // add each genre's ID and name to an array to be stored in state
    genres.forEach(element => {
      genreArray = [...genreArray, {id: element.mal_id, name: element.name}]
    });

    themes.forEach(element => {
      genreArray = [...genreArray, {id: element.mal_id, name: element.name}]
    })

    const image = randomAnime.images.jpg.image_url

    setCurrentAnime( prevState => ({
      ...prevState,
      id: id,
      title: title,
      genres: genreArray,
      image: image
    }))

  }


  return (
    <div className='app-container'>
      <SearchHistory />
      <Header />
      <DiscoverContainer anime={currentAnime} banGenre={banGenre} fetchAnime={callAPI}/>
      <BanList banList={banList} removeBannedGenre={removeBannedGenre}/>
    </div>
  )
}

export default App
