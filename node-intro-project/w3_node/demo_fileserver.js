var http = require(`http`);
var url = require(`url`);
var fs = require(`fs`);

http.createServer(function (req, res) {
  const requestedFile = req.url;
  var q = url.parse(req.url, true); // url object
  var filename = "." + q.pathname;  // q.pathname = `/winter.html`

  // based on above info, q.pathname === req.url
 
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found")
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    // console.log(`q = ${q}`)
    // console.log(`filename = ${filename}`)
    // console.log(`requestedfile var = ${requestedFile}`);
    return res.end();
  })

}).listen(8080);