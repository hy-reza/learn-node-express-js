const http = require("http");

const server = http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write("HOME PAGE");
      res.end();
    }

    if (req.url == "/about") {
      res.write("ABOUT PAGE")
      res.end();
    }

    
    res.end('404 NOT FOUND')
  })
  .listen(3000);
