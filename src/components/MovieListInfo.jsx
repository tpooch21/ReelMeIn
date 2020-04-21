// Stateless functional component
// Only rendered when movie is selected
// Will display Year, Runtime, Metascore, imdbRating, Watched button

// data -->
/*
* Year
* Runtime
* Metascore
* imdbRating
* Watched toggle
*/

var MovieListInfo = (props) => (
  <div className="movie-list-info">
    <div className="info-pieces">
      <span><b>Year: </b></span>
      <span><b>Runtime: </b></span>
      <span><b>Metascore: </b></span>
      <span><b>imdbRating: </b></span>
      <span><b>Watched: </b><button className=""></button></span>
    </div>
    <img src={props.movieInfo.image}></img>
  </div>
);

export default MovieListInfo;