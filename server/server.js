const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('../client/'));

htmlRoutes(app);

app.listen(PORT, () => console.log('hello listening on port', PORT));
