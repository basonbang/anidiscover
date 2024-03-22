const DiscoverContainer = ( { anime, banGenre, fetchAnime}) => {

  console.log("Anime object in Discovery Container");
  console.log(anime);

  console.log("Genres of the anime:");
  console.log(anime?.genres);

  return ( 
    <div className="discover-container">
      <div>
        {anime && <h2>{anime.title}</h2>}

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

        {anime && <img src={anime.image} height={250} alt={anime.title}></img>}
      </div>

      <button id="discover-action-button" onClick={fetchAnime}>
        Discover!
      </button>
    </div>
   );
}
 
export default DiscoverContainer;