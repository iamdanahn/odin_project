
// imports express from node modules
const express = require('express');
const app = express();
const port = 3000;

// Route definition
// a callback is invoked whenever a "GET" request to '/' occurs
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// starts a server on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});