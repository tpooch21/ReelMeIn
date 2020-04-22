// App will be the stateful class component that serves as the parent of MovieList and SearchBar
// Grandparent of MovieListEntry
// State will have a movies list that represents the current list of movies
// When initialized from index.js, the state will represent the movie data passed to App's props at initialization
// When a Search is made from the SearchBar, App's state will be updated to reflect movies that match the current search
// ^^ Above functionality will lie in onSearch event handler, which will be passed to SearchBar when it's initialized
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import MovieAdd from './MovieAdd.js';
import SearchMovieDB from '../data/searchMovieDB.js';

// UPDATE STATE components
//  toWatch: movies not yet watched
//  watched: movies watched
//  toWatchIsSelected: boolean, tells which state should be rendered to movieList


// MOVIE INFO
//  Add function in separate file to communicate with database
//  Pass it through as prop to App
//  Consider making movieListEntry a stateful class component
//  Clicking on title wouldn't have to change any state within app
//  API should be contacted as soon as Movie is added to list, but data shouldn't be displayed until after title is clicked
//  Pass database communicating function as prop to MovieAdd
//  Each movieListEntry should have access to its own data

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toWatch: this.props.movies,
      watched: this.props.movies,
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


  // Within onUserMovieInput, we can make a call to a new function, getMovieData
  // getMovieData will file through returnObj.results, which will have an array of results
  // Iterate over results and select the movie with the highest popularity, and return

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

      // Add it to beginning of watched (if it's the first addition to watched, set it equal to an array literal)
      if (!this.state.watched) {
        this.state.watched = [movie];
      } else {
        this.state.watched.unshift(movie);
      }

      // If selecting a movie on the 'Watched' list (maybe added by mistake), move it back to the 'To Watch' list
    } else {
      this.state.watched.forEach((movieWatched, i) => {
        if (movieWatched.title === movie.title) {
          // When input movie is found in watched, remove it
          this.state.watched.splice(i, 1);
        }
      });

      // Add it to beginning of toWatch
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
    var watchState = this.state.toWatchIsSelected ? 'toWatch' : 'watched';
    // If first render, movies will be null and MovieList shouldn't be rendered yet
    var firstRender = this.props.movies === null;

    return (
      <div className="app-parent">
        <h1>FlickMagnet</h1>
        <img className="film-strip" src="https://pngimg.com/uploads/filmstrip/filmstrip_PNG71.png"/>
        <div className="movieAdd-component">
          <MovieAdd onAdd={this.onUserMovieInput} />
        </div>
        <div className="search-component">
          <SearchBar onSubmit={this.onSubmit} watchButton={this.toggleWatchButton} state={watchState}/>
        </div>
        <div className="movie-list-component">
           <MovieList movies={movies} movieListEntryButton={watchState} onClick={this.onUserWatch}/>
        </div>
        <img className="TMDB-attribute" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"></img>
      </div>
    );
  }

}

export default App;



