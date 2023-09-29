const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(async (req, res) => {
    const payload = await parsePayload(req)
    const query = parseQueryString(req);
    const controller = findController(req);
    console.log("url:", req.url, "\tquery:", query, "\tpayload:", payload);

    const {statusCode, body} = controller.respondTo(req.url, query, payload);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(body));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const GreetController = require('./greet_controller.js');

function findController(req) {
    if (req.url.startsWith('/greet')) {
        return new GreetController();
    } else {
        return new NotFoundController();
    }
}

class NotFoundController {
    respondTo(url, query, payload) {
        const body = {message: "Not found"};
        return {statusCode: 404, body: body}
    }
}

function parseQueryString(req) {
    const parsed_url = new URL(req.url, `http://${hostname}:${port}`);
    return Object.fromEntries(parsed_url.searchParams);
}

function parsePayload(req) {
    return new Promise((resolve) => {
        if (req.method !== 'POST') {
            resolve({});
            return;
        }

        let requestBody = [];
        req.on('data', (chunks) => {
            requestBody.push(chunks);
        });

        req.on('end', () => {
            resolve(Buffer.concat(requestBody).toString());
        });
    })
}

