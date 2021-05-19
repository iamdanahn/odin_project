
// imports express from node modules
const express = require('express');
const app = express();
// import wiki module
const wiki = require("./wiki");

// Route definition
// a callback is invoked whenever a "GET" request to '/' occurs
app.get('/', (req, res) => {
  res.send('Hello World!')
});
// useful response handlers (https://expressjs.com/en/guide/routing.html#response-methods)


// tells the main app to use endpoint '/wiki' and attach w.e else from wiki to it
app.use('/wiki', wiki);




// starts a server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});