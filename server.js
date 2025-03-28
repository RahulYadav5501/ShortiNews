const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: './server/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
