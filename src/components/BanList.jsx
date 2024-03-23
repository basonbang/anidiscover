const BanList = ({ banList, removeBannedGenre, clearBanList }) => {
  return (
    <div className="ban-list">
      <h2> Avoided Genres </h2>
      <h4> Select a genre in the listing to avoid it</h4>

      {banList.length > 0 && <button onClick={clearBanList} className="clear-bans-button">Clear Bans</button>}

      {banList && banList.length > 0 ? (
        banList.map((genre, index) => {
          return (
            <button key={index} onClick={() => removeBannedGenre(genre)} className="genre-button">
              {genre.name}
            </button>
          );
        })
      ) : (
        <div>You haven't avoided any genres yet!</div>
      )}
    </div>
  );
};

export default BanList;
