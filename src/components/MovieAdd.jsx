// Should sit above SearchBar, rendered by App
// Users can type movies into input field, and add them to the list
// Should display only user-added data, not hardcoded data
// Will trigger event handler 'onUserMovieInput' in App, which will:
//    1. Take the current movie data (from state), and push input movie to it (after building it as an object with a title property)
//    2. Call setState and update current movie list with edited movie list
// Initial render should show an empty list, maybe something that says "Add a movie to display here!"

var MovieAdd = (props) => (
  <div className="movie-add">
    <input className="user-movie" type="text" placeholder="Add a Movie.." />
    <button className="add-button" onClick={(e) => {
      props.onAdd(e.target.previousSibling.value);
      e.target.previousSibling.value = '';
    }}>Add!</button>
  </div>
)

export default MovieAdd;