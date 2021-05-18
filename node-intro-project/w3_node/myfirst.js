
// http is a built-in module from Node.js
var http = require('http');

// .createServer() is a built-in method from http's module
// ^ create a server object 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');

  // another way to write above
  // res.write('Hello World!'); //write a response to the client
  // res.end(); //end the response
}).listen(8080); // listens on port 8080

// Custom module
exports.myDateTime = function () {
  return Date();
};

