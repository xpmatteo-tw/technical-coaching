const http = require('http');
const GreetController = require('./greet_feature.js');

const hostname = '127.0.0.1';
const port = 8080;

class NotFoundController {
    handle(req, res) {
        const body = {message: "Not found"};
        return {statusCode: 404, body: body}
    }
}

const notFoundController = new NotFoundController();
const greetController = new GreetController();

function findController(req) {
    if (req.url === '/greet') {
        return greetController;
    } else {
        return notFoundController;
    }
}

const server = http.createServer((req, res) => {
    console.log(req.url)
    let controller = findController(req);
    const {statusCode, body} = controller.handle(req, res);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(body));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



