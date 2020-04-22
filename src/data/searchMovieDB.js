// example: https://api.themoviedb.org/3/movie/550?api_key=c4aa18935121b116824f4d4e8f58ea2d

// Issue query to movie, TV show or person search methods
// Look at the results field

import API_KEY from './config.js';

const baseUrl = `https://api.themoviedb.org/3/`;

var searchMovieDB = (keyword, successCB, errorCB = null) => {
  $.ajax({
    type: 'GET',
    url: `${baseUrl}search/movie?api_key=${API_KEY}&query=${keyword}`,
    success: (data) => {
      successCB(data);
    },
    error: (err) => {
      console.log('Oh no, there was an error performing your request!');
    }
  });
}

export default searchMovieDB;