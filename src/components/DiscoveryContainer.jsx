import { useState } from "react";
import DescriptionModal from "./DescriptionModal";

const DiscoverContainer = ( { anime, banGenre, fetchAnime}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return ( 
    <div className="discover-container">
      <div>
        {anime && <h2 className="gradient-text">{anime.title}</h2>}
        <br />

        {anime && anime.genres &&
          anime.genres.map((genre) => (
            <button 
              key={genre.id} 
              onClick={() => banGenre(genre.id, genre.name)}
            >
              {genre.name}
            </button>
          ))
        }

        <br />

        {!(Object.keys(anime).length === 0) && <img src={anime.images[0]} height={250} alt={anime.title}></img>}

        {!(Object.keys(anime).length === 0) && <div className="other-information">
          <p>Episodes: {anime.episodes}</p>
          <p>Score: {anime.score}</p>
          <div>
            <button onClick={openModal}>Open Description</button>
            {isModalOpen && <DescriptionModal description={anime.synopsis} onClose={closeModal} />}
          </div>
        </div>}
      </div>

      <button id="discover-action-button" onClick={fetchAnime}>
        Discover!
      </button>
    </div>
   );
}
 
export default DiscoverContainer;