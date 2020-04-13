// Build out functional stateless MovieList
// Div class="movie-list"
// Unordered list, with li elements
// Iterate over passed in movie data, and create a li element for each
import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => {
  if (props.movies.length === 0) {
    return (
      <div className="movie-list">
        <h5>No Movie by That Name Found</h5>
      </div>
    );
  }

  return (
  <div className="movie-list">
    <ul>
      {props.movies.map(movie => {
          return <MovieListEntry movie={movie} />
       })}
    </ul>
  </div>
  );
}

export default MovieList;



