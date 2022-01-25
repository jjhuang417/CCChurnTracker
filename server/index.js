// Server setup
const express = require('express');
const app = express();
const port = 3000;

const path = require('path')

app.use(express.static('client/public'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Connecting locally to http://localhost:${port}`);
});
