const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Load routes
const index = require('./index');

// Use Routes
app.use('/', index);


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;