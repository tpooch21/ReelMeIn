// App will be the stateful class component that serves as the parent of MovieList and SearchBar
// Grandparent of MovieListEntry
// State will have a movies list that represents the current list of movies
// When initialized from index.js, the state will represent the movie data passed to App's props at initialization
// When a Search is made from the SearchBar, App's state will be updated to reflect movies that match the current search
// ^^ Above functionality will lie in onSearch event handler, which will be passed to SearchBar when it's initialized
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };

  }

  // To add onSubmit handler

  render() {

    return (
      <div className="app-parent">
        <h1>Movie List</h1>
        <div className="search-component">
          <SearchBar />
        </div>
        <div className="movie-list-component">
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }

}

export default App;