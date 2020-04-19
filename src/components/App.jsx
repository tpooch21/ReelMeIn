// App will be the stateful class component that serves as the parent of MovieList and SearchBar
// Grandparent of MovieListEntry
// State will have a movies list that represents the current list of movies
// When initialized from index.js, the state will represent the movie data passed to App's props at initialization
// When a Search is made from the SearchBar, App's state will be updated to reflect movies that match the current search
// ^^ Above functionality will lie in onSearch event handler, which will be passed to SearchBar when it's initialized
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import MovieAdd from './MovieAdd.js';

// UPDATE STATE components
//  toWatch: movies not yet watched
//  watched: movies watched
//  toWatchIsSelected: boolean, tells which state should be rendered to movieList


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toWatch: this.props.movies,
      watched: [],
      toWatchIsSelected: true
    };

    // Placeholder that stores most recent movie list whenever a setState changes state of movies
    this.toWatchHolder = this.state.toWatch;
    this.watchedHolder = this.state.watched;

    this.onSubmit = this.onSubmit.bind(this);
    this.onUserMovieInput = this.onUserMovieInput.bind(this);
  }

  onSubmit(title) {

    if (title === '') {
      this.setState({
        toWatch: this.toWatchHolder,
        watched: this.watchedHolder
      });
      return;
    }

    // filter both toWatch and watched lists based on search
    var toWatchResults = this.state.toWatch.filter(movie => {
      if (movie.title.toLowerCase().indexOf(title.toLowerCase()) > -1) {
        return movie;
      }
    });

    var watchedResults = this.state.toWatch.filter(movie => {
      if (movie.title.toLowerCase().indexOf(title.toLowerCase()) > -1) {
        return movie;
      }
    });

    // Update placeholder before state of movies changes
    this.toWatchHolder = this.state.toWatch;
    this.watchedHolder = this.state.watched;

    this.setState({
      toWatch: toWatchResults,
      watched: watchedResults
    });
  }

  // Handles addition to movieList from user input
  onUserMovieInput(title) {
    var userMovie = { title };

    // If first movie addition, set state.movies to array literal
    if (this.state.toWatch === null) {
      this.toWatchHolder = [userMovie];

      this.setState({
        toWatch: this.toWatchHolder
      });
      return;
    }

    // If not first addition, add to the list
    this.state.toWatch.push(userMovie);

    // Update placeholder before state of movies changes
    this.toWatchHolder = this.state.toWatch;

    this.setState({
      toWatch: this.state.toWatch
    });

  }

  // TWO NEW EVENT HANDLERS
  onUserWatch(movie) {
    // Lookup movie in toWatch movie list [{title: movie1}, {title: movie2}]
    this.state.toWatch.forEach((movieToWatch, i) => {
      if (movieToWatch.title === movie.title) {
        // When input movie is found in toWatch, remove it
        this.state.toWatch.splice(i, 1);
      }
    });

    // Add it to beginning of watched
    this.state.watched.unshift(movie);

    this.setState({
      toWatch: this.state.toWatch,
      watched: this.state.watched
    });

  }

  // toggleToWatchIsSelected
  //   Changes state of toWatchIsSelected from t to f, or vice versa
  //   Click event handler within newly added WatchButtons component


  render() {

    var movies = this.state.toWatchIsSelected ? this.state.toWatch : this.state.watched;
    // Determined whether movieListEntry 'watched' button should appear to be selected or not
    var movieListEntryButton = this.state.toWatchIsSelected ? 'toWatch' : 'watched';

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
           <MovieList movies={movies} movieListEntryButton={movieListEntryButton}/>
        </div>
      </div>
    );
  }

}

export default App;