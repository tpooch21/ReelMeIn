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
      <span><b>Year: </b></span><br></br>
      <span><b>Runtime: </b></span><br></br>
      <span><b>Metascore: </b></span><br></br>
      <span><b>imdbRating: </b></span><br></br>
      <span><b>Watched: </b><button className={`${props.movieButton}-button`} onClick={() => {props.click(props.movieInfo)}}></button></span>
    </div>
    <img className="movie-image" src="https://doyouremember.com/wp-content/uploads/2019/07/forrest-gump.jpg"></img>
  </div>
);

export default MovieListInfo;