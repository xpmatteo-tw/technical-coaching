const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

function not_found_controller(req, res) {
    res.statusCode = 404;
    const body = {message: "Not found"};
    res.end(JSON.stringify(body));
}

function greet_controller(req, res) {
    res.statusCode = 200;
    const body = {message: "Hello, world"};
    res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/greet') {
        greet_controller(req, res);
    } else {
        not_found_controller(req, res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



