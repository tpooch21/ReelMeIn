// App will be the stateful class component that serves as the parent of MovieList and SearchBar
// Grandparent of MovieListEntry
// State will have a movies list that represents the current list of movies
// When initialized from index.js, the state will represent the movie data passed to App's props at initialization
// When a Search is made from the SearchBar, App's state will be updated to reflect movies that match the current search
// ^^ Above functionality will lie in onSearch event handler, which will be passed to SearchBar when it's initialized
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import MovieAdd from './MovieAdd.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };

    // Placeholder that stores most recent movie list whenever a setState changes state of movies
    this.movieHolder = this.state.movies;

    this.onSubmit = this.onSubmit.bind(this);
    this.onUserMovieInput = this.onUserMovieInput.bind(this);
  }

  onSubmit(title) {

    if (title === '') {
      this.setState({
        movies: this.movieHolder
      });
      return;
    }

    var searchResults = this.state.movies.filter(movie => {
      if (movie.title.toLowerCase().indexOf(title.toLowerCase()) > -1) {
        return movie;
      }
    });

    // Update placeholder before state of movies changes
    this.movieHolder = this.state.movies;

    this.setState({
      movies: searchResults
    });
  }

  // Add addHandler here
  onUserMovieInput(title) {
    var userMovie = { title };

    // If first movie addition, set state.movies to array literal
    if (this.state.movies === null) {
      this.movieHolder = [userMovie];

      this.setState({
        movies: this.movieHolder
      });
      return;
    }

    // If not first addition, add to the list
    this.state.movies.push(userMovie);

    // Update placeholder before state of movies changes
    this.movieHolder = this.state.movies;

    this.setState({
      movies: this.state.movies
    });

  }

  render() {

    // If first render, movies will be null and MovieList shouldn't be rendered yet
    var firstRender = this.props.movies === null;

    return (
      <div className="app-parent">
        <h1>FlickMagnet</h1>
        <div className="movieAdd-component">
          <MovieAdd onAdd={this.onUserMovieInput} />
        </div>
        <div className="search-component">
          <SearchBar onSubmit={this.onSubmit} />
        </div>
        <div className="movie-list-component">
           <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }

}

export default App;