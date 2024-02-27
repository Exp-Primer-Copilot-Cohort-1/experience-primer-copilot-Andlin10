// Path: submit.js
// Create web server
var http = require('http');
var fs = require('fs');
var qs = require('querystring');

// Create server
http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var body = '';

    req.on('data', function(data) {
      body += data;
    });

    req.on('end', function() {
      var post = qs.parse(body);
      fs.appendFile('comments.txt', post.comment + '\n', function(err) {
        if (err) throw err;
        console.log('Comment saved');
      });
    });
  }
  res.writeHead(301, {'Location': 'http://localhost:8000'});
  res.end();
}).listen(8001);
console.log('Server is running at http://localhost:8001');
