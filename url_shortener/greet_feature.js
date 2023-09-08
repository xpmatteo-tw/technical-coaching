
class GreetController {
    handle(req, resp) {
        res.statusCode = 200;
        const body = {message: "Hello, world"};
        res.end(JSON.stringify(body));
    }
}


module.exports = GreetController;
