// MovieListEntry will build a list item for each movie
// MovieListEntries will have access to movie titles, descriptions, etc from their props
// Functional stateless components

// Add a little button to each entry 'watched' that handles click Event onUserWatch in App


// If toWatchIsSelected, all buttons should have black background (from state)
// If not, all should have blue backgrounds
// <button className={`${props.state}-button`}

var MovieListEntry = (props) => (
  <div className="movie-list-entry">
    <h5>{props.movie.title}</h5>
    <button className={`${props.movieListEntryButton}-button`} onClick={() => {props.onClick(props.movie)}}>Watched</button>
  </div>
);

export default MovieListEntry;