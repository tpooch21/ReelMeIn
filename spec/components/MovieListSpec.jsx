import MovieList from '../../src/components/MovieList.js';
import fakeMovieData from '../data/fakeMovieData.js';
import MovieListEntry from '../../src/components/MovieListEntry.js';

describe('MovieList', function() {

  // Should be a functional stateless component
  it('should be a functional stateless component', function() {
    expect(React.Component.isPrototypeOf(MovieList)).to.be.false;
  });
  // Should render 1 movie when given 1 movie
  it('should render 1 movie when given one movie', function() {
    const renderer = new ReactShallowRenderer();

    renderer.render(
      <MovieList movies={fakeMovieData.slice(-1)} />
    );

    const movieList = renderer.getRenderOutput();
    expect(movieList.props.children).to.have.length(1);
    movieList.props.children.forEach(child => expect(child.type).to.equal(MovieListEntry));
  });

  // Should render 3 movies when given 3 movies
  it ('should render 3 movies when given 3 movies', () => {
    const renderer = new ReactShallowRenderer();

    renderer.render(
      <MovieList movies={fakeMovieData.slice(-3)} />
    );

    const movieList = renderer.getRenderOutput();
    expect(movieList.props.children).to.have.length(3);
    movieList.props.children.forEach(child => expect(child.type).to.equal(MovieListEntry));
  });

  // Should render 5 movies when given 5 movies
  it ('should render 5 movies when given 5 movies', () => {
    const renderer = new ReactShallowRenderer();

    renderer.render(
      <MovieList movies={fakeMovieData.slice(-5)} />
    );

    const movieList = renderer.getRenderOutput();
    expect(movieList.props.children).to.have.length(5);
    movieList.props.children.forEach(child => expect(child.type).to.equal(MovieListEntry));
  });

})
