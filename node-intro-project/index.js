const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/about') {
    fs.readFile('about.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        return res.end('404 Content Not Found')
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end()
    })
  } else if (req.url === '/contact-me') {
    fs.readFile('contact-me.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        return res.end('404 Content Not Found')
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end()
    })
  } else if (req.url === '/') { 
    fs.readFile('index.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        return res.end('404 Content Not Found')
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end()
    })
  }

  res.writeHead(404, {'Content-Type': 'text/html'})
  return res.end('404 Content Not Found')
}).listen(8080);