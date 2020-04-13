// Build SearchBar as functional stateless component
// SearchBar will build searchBar input box, and Go! Button
// When Go! Button is clicked, input in SearchBar will update the state of app

var SearchBar = (props) => (
  <div className="search-bar">
    <input className="search-here" type="text">Search</input>
    <button className="go-button">Go!</button>
  </div>
);

export default SearchBar;