
class GreetController {
    handle(req, resp) {
        const body = {message: "Hello, world"};
        return {statusCode: 200, body: body};
    }
}

module.exports = GreetController;
