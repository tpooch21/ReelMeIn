// List out movie data
// Render MovieList to the DOM
import App from './components/App.js';

var movies = null;

ReactDOM.render(
  <App movies={movies} />,
  document.getElementById('app')
);

