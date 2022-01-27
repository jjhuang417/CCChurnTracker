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
  let SQLquery = 'SELECT * FROM credit_card ORDER BY id;';
  db.query(SQLquery, (error, results) => {
    if (error) {
      res.status(404).send(error);
      console.log(error);
    } else {
      res.status(200).send(results.rows);
    }
  })
});

app.put('/cc', (req, res) => {
  let SQLquery = 'UPDATE credit_card SET current_spend = current_spend + $1 WHERE id = $2';
  db.query(SQLquery, [req.body.spend, req.body.id], (error, results) => {
    if (error) {
      res.status(404).send(error)
      console.log(error);
    } else {
      res.status(201).send('Update successful!');
    }
  })
})

app.put('/cc/finished', (req, res) => {
  let SQLquery = 'UPDATE credit_card SET finished = true WHERE id = $1';
  db.query(SQLquery, [req.body.id], (error, results) => {
    if (error) {
      res.status(404).send(error)
      console.log(error);
    } else {
      res.status(201).send('Update successful!');
    }
  })
})

app.put('/cc/delete', (req, res) => {
  let SQLquery = 'UPDATE credit_card SET finished = false WHERE id = $1';
  db.query(SQLquery, [req.body.id], (error, results) => {
    if (error) {
      res.status(404).send(error)
      console.log(error);
    } else {
      res.status(201).send('Update successful!');
    }
  })
})