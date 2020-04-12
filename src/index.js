// List out movie data
// Render MovieList to the DOM

import MovieList from './components/MovieList.js';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(
  <MovieList movies={movies} />,
  document.getElementById('app')
);

