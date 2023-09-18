const http = require('http');
const GreetController = require('./greet_feature.js');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.url);
    parsePayload(req, payload => {
        const controller = findController(req);
        const query = parseQueryString(req);

        const {statusCode, body} = controller.handle(req.url, query, payload);

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = statusCode;
        res.end(JSON.stringify(body));
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function findController(req) {
    if (req.url.startsWith('/greet')) {
        return greetController;
    } else {
        return notFoundController;
    }
}

class NotFoundController {
    handle(url, query, payload) {
        const body = {message: "Not found"};
        return {statusCode: 404, body: body}
    }
}
const notFoundController = new NotFoundController();

const greetController = new GreetController();

function parseQueryString(req) {
    const parsed_url = new URL(req.url, `http://${hostname}:${port}`);
    return Object.fromEntries(parsed_url.searchParams);
}

function parsePayload(req, onSuccess) {
    if (req.method !== 'POST') {
        onSuccess({});
        return;
    }

    let requestBody = [];
    req.on('data', (chunks)=>{
        requestBody.push(chunks);
    });

    req.on('end', ()=>{
        onSuccess(Buffer.concat(requestBody).toString());
    });
}

