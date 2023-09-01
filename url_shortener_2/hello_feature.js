function serve_greet(searchParams) {
    console.log(searchParams)
    if (searchParams.name) {
        const body = {message: `Hello, ${searchParams['name']}!`};
        return {status_code: 200, body: body};
    }
    const body = {message: "Hello, world!"};
    return {status_code: 200, body: body};
}


module.exports = serve_greet;