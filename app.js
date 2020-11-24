const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Azure Pipeline Setup by hs direct!!!');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
