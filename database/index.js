const { Client } = require('pg')
const client = new Client({
  user:'Soft',
  host: 'localhost',
  database: 'postgres',
  port: 5432
})

client.connect()
  .then(() => console.log('Connected to PostgreSQL DB with Pool'))
  .catch((err) => console.log(err));

module.exports = client;