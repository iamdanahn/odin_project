//////////
// NODE VERSION
//////////

// const http = require('http');
// const fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url === '/about') {
//     fs.readFile('about.html', function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         return res.end('404 Content Not Found')
//       }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end()
//     })
//   } else if (req.url === '/contact-me') {
//     fs.readFile('contact-me.html', function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         return res.end('404 Content Not Found')
//       }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end()
//     })
//   } else if (req.url === '/') {
//     fs.readFile('index.html', function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         return res.end('404 Content Not Found')
//       }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end()
//     })
//   }

//   res.writeHead(404, {'Content-Type': 'text/html'})
//   return res.end('404 Content Not Found')
// }).listen(8080);

//////////
// EXPRESS VERSION
//////////

const express = require('express');
const app = express();
const fs = require('fs');

app.use('/', (req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end('404 Content Not Found')
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end()
	})
})
app.use('/contact-me', (req, res) => {
  fs.readFile("contact-me.html", function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Content Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
})
app.use('/about', (req, res) => {
  fs.readFile("about.html", function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Content Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
})

const port = 3000;
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
})