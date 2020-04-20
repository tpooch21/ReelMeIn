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
    this.onUserWatch = this.onUserWatch.bind(this);
    this.toggleWatchButton = this.toggleWatchButton.bind(this);
  }

  onSubmit(title) {

    if (title === '') {
      this.setState({
        toWatch: this.toWatchHolder,
        watched: this.watchedHolder
      });
      return;
    }

    debugger;
    // filter both toWatch and watched lists based on search
    var toWatchResults = this.state.toWatch.filter(movie => {
      if (movie.title.toLowerCase().indexOf(title.toLowerCase()) > -1) {
        return movie;
      }
    });

    var watchedResults = this.state.watched.filter(movie => {
      if (movie.title.toLowerCase().indexOf(title.toLowerCase()) > -1) {
        return movie;
      }
    });

    // If toWatchResults holds the result, show the filtered toWatch List
    if (toWatchResults.length > 0) {
      this.state.toWatchIsSelected = true;
    // If watchedResults holds the result, show the filtered watch list
    } else if (watchedResults.length > 0) {
      this.state.toWatchIsSelected = false;
    }

    // Update placeholder before state of movies changes
    this.toWatchHolder = this.state.toWatch;
    this.watchedHolder = this.state.watched;

    this.setState({
      toWatch: toWatchResults,
      watched: watchedResults,
      toWatchIsSelected: this.state.toWatchIsSelected
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

  // Add movies to 'Watched' or 'To Watch' lists when user toggles 'Watched' button
  onUserWatch(movie) {

    // If selecting a movie on the 'To Watch' list (maybe added by mistake), move it to the 'Watched' list
    if (this.state.toWatchIsSelected) {
      // Lookup movie in toWatch movie list [{title: movie1}, {title: movie2}]
      this.state.toWatch.forEach((movieToWatch, i) => {
        if (movieToWatch.title === movie.title) {
          // When input movie is found in toWatch, remove it
          this.state.toWatch.splice(i, 1);
        }
      });

      // Add it to beginning of watched
      this.state.watched.unshift(movie);

      // If selecting a movie on the 'Watched' list (maybe added by mistake), move it back to the 'To Watch' list
    } else {
      this.state.watched.forEach((movieWatched, i) => {
        if (movieWatched.title === movie.title) {
          // When input movie is found in toWatch, remove it
          this.state.watched.splice(i, 1);
        }
      });

      // Add it to beginning of watched
      this.state.toWatch.unshift(movie);

    }

    this.setState({
      toWatch: this.state.toWatch,
      watched: this.state.watched
    });

  }

  // Change movie list being displayed based on whether 'Watched' or 'To Watch' button is clicked
  toggleWatchButton() {
    var watchState = this.state.toWatchIsSelected ? false : true;

    this.setState({
      toWatchIsSelected: watchState
    });
  }

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
          <SearchBar onSubmit={this.onSubmit} watchButton={this.toggleWatchButton}/>
        </div>
        <div className="movie-list-component">
           <MovieList movies={movies} movieListEntryButton={movieListEntryButton} onClick={this.onUserWatch}/>
        </div>
      </div>
    );
  }

}

export default App;