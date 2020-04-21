// MovieListEntry will build a list item for each movie
// MovieListEntries will have access to movie titles, descriptions, etc from their props
// Functional stateless components

// Add a little button to each entry 'watched' that handles click Event onUserWatch in App


// If toWatchIsSelected, all buttons should have black background (from state)
// If not, all should have blue backgrounds
// <button className={`${props.state}-button`}

// Make MovieListEntry stateful class component
// Needs to re-render when it's clicked
// initial state = {isSelected: false}
// Clicking on a title will change state to true and trigger re-rendering

// Separate component for MovieListInfo

// Conditional render - if MovieListEntry is selected, MovieListInfo will be rendered with movieData from API
// If not selected, it won't be rendered

// Take watched button out of MovieListEntry and move it to MovieListInfo

import MovieListInfo from './MovieListInfo.js';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick() {
    this.setState({
      isSelected: !this.state.isSelected
    });
  }

  render() {

    return (
      <div className="movie-list-entry">
        <div className="movie-title" onClick={this.onTitleClick}>
          <h5>{this.props.movie.title}</h5>
        </div>
        <div className="movie-info">
          {this.state.isSelected &&
            <MovieListInfo movieInfo={this.props.movie} click={this.props.onClick} movieButton={this.props.movieListEntryButton}/>
          }
        </div>
      </div>
    );
  }

};


export default MovieListEntry;