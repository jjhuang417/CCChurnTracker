// Server setup
const express = require('express');
const app = express();
const port = 3000;

const path = require('path')

// DB
const db = require('../database/index.js');

app.use(express.static('client/public'));
app.use(express.json());

// Server
app.listen(port, () => {
  console.log(`Connecting locally to http://localhost:${port}`);
});

// Request Handling
app.get('/cc', (req, res) => {
  let SQLquery = 'SELECT * FROM credit_card;';
  db.query(SQLquery, (error, results) => {
    if (error) {
      res.status(404).send(error);
      console.log(error);
    } else {
      res.status(200).send(results.rows);
    }
  })
})