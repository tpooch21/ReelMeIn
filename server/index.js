const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');

app.use(morgan('tiny'));

const movies = [
  {title: "Mean Girls"},
  {title: "Finding Nemo"},
  {title: "Step Brothers"},
  {title: "Role Models"},
  {title: "Die Hard"},
];

const parser = require('body-parser');

app.listen(port, () => {console.log(`Server is listening at http://localhost:${port}`)});

app.use(express.static(__dirname + '/../'));

app.get('/', (req, res) => {res.send('Hello World')});

app.get('/api/movies', (req, res) => {
  res.status(200).json(movies);
});

