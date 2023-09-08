const http= require('http');
const GreetController = require('./greet_feature.js');

const hostname = '127.0.0.1';
const port = 8080;

class NotFoundController {
    async handle(req, res) {
        res.statusCode = 404;
        const body = {message: "Not found"};
        res.end(JSON.stringify(body));
    }
}

const notFoundController = new NotFoundController();
const greetController = new GreetController();

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/greet') {
        greetController.handle(req, res);
    } else {
        notFoundController.handle(req, res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



