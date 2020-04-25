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

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

var MovieListInfo = (props) => (
  <div className="movie-list-info">
    <div className="info-pieces">
      <span><b>Year: </b>{props.movieInfo.release_date.slice(0, 4)}</span><br></br>
      <span><b>Runtime: </b></span><br></br>
      <span><b>Popularity: </b>{props.movieInfo.popularity}</span><br></br>
      <span><b>imdbRating: </b>{props.movieInfo.vote_average}</span><br></br>
      <span><b>Watched: </b><button className={`${props.movieButton}-button`} onClick={() => {props.click(props.movieInfo)}}></button></span>
    </div>
    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${props.movieInfo.poster_path}`}/>
  </div>
);

export default MovieListInfo;

/*
RETURN DATA FORMAT

adult: false
backdrop_path: "/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg"
genre_ids: (2) [18, 10749]
id: 597
original_language: "en"
original_title: "Titanic"
overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912."
popularity: 30.31
poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
release_date: "1997-11-18"
title: "Titanic"
video: false
vote_average: 7.8
vote_count: 16666
__proto__: Object
*/