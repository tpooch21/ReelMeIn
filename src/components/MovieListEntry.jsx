// MovieListEntry will build a list item for each movie
// MovieListEntries will have access to movie titles, descriptions, etc from their props
// Functional stateless components

var MovieListEntry = (props) => (
  <div className="movie-list-entry">
    <h5>{props.movie.title}</h5>
  </div>
);

export default MovieListEntry;