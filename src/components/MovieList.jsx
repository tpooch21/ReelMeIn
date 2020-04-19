// Build out functional stateless MovieList
// Div class="movie-list"
// Unordered list, with li elements
// Iterate over passed in movie data, and create a li element for each

// From movieList state, can determine whether toWatchIsSelected, and pass state down to MovieListEntry too

import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => {
  if (props.movies === null) {
    return (
      <div className="movie-list-empty">
        <h5>Add a Movie to Get Started!</h5>
      </div>
    );
  }

  if (props.movies.length === 0) {
    return (
      <div className="movie-list-empty">
        <h5>No Movie by That Name Found</h5>
      </div>
    );
  }

  return (
  <div className="movie-list">
      {props.movies.map(movie => {
          return <MovieListEntry movie={movie} movieListEntryButton={props.movieListEntryButton} onClick={props.onClick}/>
       })}
  </div>
  );
}

export default MovieList;



