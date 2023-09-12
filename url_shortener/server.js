const http = require('http');
const GreetController = require('./greet_feature.js');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.url)
    const controller = findController(req);
    const query = parseQueryString(req);
    const payload = parsePayload(req);

    const {statusCode, body} = controller.handle(query, payload);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(body));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

class NotFoundController {
    handle(query, payload) {
        const body = {message: "Not found"};
        return {statusCode: 404, body: body}
    }
}

const notFoundController = new NotFoundController();
const greetController = new GreetController();

function findController(req) {
    if (req.url.startsWith('/greet')) {
        return greetController;
    } else {
        return notFoundController;
    }
}

function parseQueryString(req) {
    const parsed_url = new URL(req.url, `http://${hostname}:${port}`);
    return Object.fromEntries(parsed_url.searchParams);
}

function parsePayload(req) {
    return req.method === 'POST' ? JSON.parse(req.body) : {};
}

