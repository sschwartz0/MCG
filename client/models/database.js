const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:PASSWORD@localhost:5432/mcg';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, password VARCHAR(40) not null)');
query.on('end', () => { client.end(); });