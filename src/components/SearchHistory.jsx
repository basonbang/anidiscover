const SearchHistory = ( {seenList, clearHistory} ) => {
  return (
    <div className="search-history">
      <h2>Search History</h2>

      <button onClick={clearHistory}> Clear History </button>
      <ul>
        {seenList && seenList.length > 0 ? (
          seenList.map((anime, index) => {
            return (
              <li key={index}>
                <img src={anime.image} alt={anime.title} />
                <p>{anime.title}</p>
              </li>
            );
          })
        ) : (
          <div> Nothing to see yet! </div>
        )}
      </ul>
    </div>
  );
}
 
export default SearchHistory;