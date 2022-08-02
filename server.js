const express = require('express');
const app = express();
const { resolve } = require('path');

// Copy the .env.example in the root into a .env file in this folder
require('dotenv').config({ path: './.env' });

app.use(express.static("public"));

app.get('/', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/index.html');
  res.sendFile(path);
});


app.listen(process.env.PORT || 3000, () => console.log('Node server listening on port 3000!'));
