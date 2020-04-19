// MovieListEntry will build a list item for each movie
// MovieListEntries will have access to movie titles, descriptions, etc from their props
// Functional stateless components

// Add a little button to each entry 'watched' that handles click Event onUserWatch in App


var MovieListEntry = (props) => (
  <div className="movie-list-entry">
    <h5>{props.movie.title}</h5>
    <button className="watched-button">Watched</button>
  </div>
);

export default MovieListEntry;