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
    const parsed_url = new URL(req.url, `http://${hostname}:${port}`);
    res.setHeader('Content-Type', 'application/json');
    if (parsed_url.pathname === '/greet') {
        serve_greet(parsed_url, res);
    } else {
        serve_not_found(req, res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



