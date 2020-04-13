// Build SearchBar as functional stateless component
// SearchBar will build searchBar input box, and Go! Button
// When Go! Button is clicked, input in SearchBar will update the state of app

var SearchBar = (props) => (
  <div className="search-bar">
    <div className="search-here">
      <input className="type-search" type="text" />
      <button className="go-button">Go!</button>
    </div>
  </div>
);

export default SearchBar;