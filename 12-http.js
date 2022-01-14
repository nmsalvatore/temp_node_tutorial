const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Welcome to our homepage');
  }

  if (request.url === '/about') {
    response.end('Here is a short history');
  }
  
  response.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5000);

