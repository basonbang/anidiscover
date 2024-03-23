import { useEffect, useState } from "react";
import BanList from "./components/BanList";
import SearchHistory from "./components/SearchHistory";
import Header from "./components/Header";
import DiscoverContainer from "./components/DiscoveryContainer";
import axios from "axios";
import "./App.css";

function App() {
  const [banList, setBanList] = useState([]);
  const [currentAnime, setCurrentAnime] = useState({});
  const [seenList, setSeenList] = useState([]);

  const banGenre = (id, name) => {
    // check if genre is already present in the banList array
    const genreIsPresent = banList.some((genre) => genre.name === name);

    // Genre is not present, update banList array
    if (!genreIsPresent) {
      setBanList([
        ...banList,
        {
          id: id,
          name: name,
        },
      ]);
    }
  };

  const removeBannedGenre = (genre) => {
    const indexOfGenre = banList.indexOf(genre);

    setBanList([
      ...banList.slice(0, indexOfGenre),
      ...banList.slice(indexOfGenre + 1),
    ]);
  };

  const clearHistory = () => {
    setSeenList([]);
  };

  const clearBanList = () => {
    setBanList([])
  }

  const makeQuery = () => {
    let excludedGenres = "";

    banList.forEach((genre) => {
      excludedGenres += `${genre.id},`;
    });

    let query = `https://api.jikan.moe/v4/anime?sfw&page=1&genres_exclude=${excludedGenres}`;

    return query;
  };


  const callAPI = async () => {
    const queryString = makeQuery();

    const response = await axios.get(queryString);

    const randomNumber = Math.floor(Math.random() * 25);
    const randomAnime = response.data.data[randomNumber];
    
    const id = randomAnime.mal_id;

    const title = randomAnime.title_english || randomAnime.title;
    const episodes = randomAnime.episodes;
    const score = randomAnime.score;
    const synopsis = randomAnime.synopsis;

    const genres = randomAnime.genres;
    const themes = randomAnime.themes;

    const image = randomAnime.images.jpg.image_url;
    const smallImage = randomAnime.images.jpg.small_image_url;

    const images = [image, smallImage];

    let genreArray = [];

    // add each genre's ID and name to an array to be stored in state
    genres.forEach((element) => {
      genreArray = [...genreArray, { id: element.mal_id, name: element.name }];
    });

    themes.forEach((element) => {
      genreArray = [...genreArray, { id: element.mal_id, name: element.name }];
    });

    setCurrentAnime((prevState) => ({
      ...prevState,
      id: id,
      title: title,
      episodes: episodes,
      score: score,
      synopsis: synopsis,
      genres: genreArray,
      images: images,
    }));

    setSeenList([
      ...seenList,
      {
        id: id,
        title: title,
        image: images[1],
      },
    ]);
  };

  return (
    <div className="app-container">
      <SearchHistory seenList={seenList} clearHistory={clearHistory} />
      <Header />
      <DiscoverContainer
        anime={currentAnime}
        banGenre={banGenre}
        fetchAnime={callAPI}
      />
      <BanList
        banList={banList}
        removeBannedGenre={removeBannedGenre}
        clearBanList={clearBanList}
      />
    </div>
  );
}

export default App;
