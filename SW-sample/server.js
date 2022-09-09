// simple express server
const express = require('express');

const app = express();
const port = 3001;

// serve static files
app.use(express.static('client'));

// serve index.html and index.js
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
