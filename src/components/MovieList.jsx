// Build out functional stateless MovieList
// Div class="movie-list"
// Unordered list, with li elements
// Iterate over passed in movie data, and create a li element for each

var MovieList = (props) => (
  // Fill out MovieList body with html and jsx
  <div className="movie-list">
    <h1>Movie List</h1>
    <ul>
      {props.movies.map(movie => {
        return <li className="movie-item">{movie.title}</li>
      })}
    </ul>
  </div>
)

export default MovieList;



