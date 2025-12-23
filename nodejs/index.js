const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const log = ` ${new Date().toLocaleString()}: From ${req.method} ${
    req.url
  } this new request recived.\n `;
  const myurl = url.parse(req.url, true);
  console.log(myurl);

  fs.appendFile("log.txt", log, (error, result) => {
    switch (myurl.pathname) {
      case "/":
        res.end("home page");
        break;
      case "/about":
        const user = myurl.query.name;
        res.end(`Hi , ${user}`);
        break;

      case "/contact":
        res.end("mobile no:1245667835");
        break;
      default:
        res.end("404 Error");
    }
  });
});

myserver.listen(800, () => console.log("server started"));
