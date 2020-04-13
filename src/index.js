// List out movie data
// Render MovieList to the DOM
import App from './components/App.js';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(
  <App movies={movies} />,
  document.getElementById('app')
);

