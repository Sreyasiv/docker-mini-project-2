const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3001'
}));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
