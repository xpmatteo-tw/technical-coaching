const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/hello') {
        serve_hello(req, res);
    } else {
        serve_not_found(req, res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function serve_not_found(req, res) {
    res.statusCode = 404;
    const message = {message: "Not found"};
    res.end(JSON.stringify(message));
}

function serve_hello(req, res) {
    res.statusCode = 200;
    const message = {message: "Hello, world!"};
    res.end(JSON.stringify(message));
}


