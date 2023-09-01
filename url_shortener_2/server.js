const http = require('http');
const serve_greet = require('./hello_feature.js');

const hostname = '127.0.0.1';
const port = 8080;

function serve_not_found(req, res) {
    res.statusCode = 404;
    const message = {message: "Not found"};
    res.end(JSON.stringify(message));
}

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/greet') {
        serve_greet(req, res);
    } else {
        serve_not_found(req, res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



