function serve_greet(req, res) {
    res.statusCode = 200;
    const message = {message: "Hello, world!"};
    res.end(JSON.stringify(message));
}

module.exports = serve_greet;