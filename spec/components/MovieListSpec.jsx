import MovieList from '../../src/components/MovieList.js';
import fakeMovieData from '../data/fakeMovieData.js';

describe('MovieList', function() {

  // Should be a functional stateless component
  it('should be a functional stateless component', function() {
    expect(React.Component.isPrototypeOf(MovieList)).to.be.false;
  });
  // Should render 1 movie when given 1 movie
  it('should render 1 movie when given one movie', function() {
    var movieList = <MovieList movies={fakeMovieData.slice(-1)} />
    expect(movieList.props.movies).to.have.length(1);
  })

  // Should render 3 movies when given 3 movies

  // Should render 5 movies when given 5 movies

})
