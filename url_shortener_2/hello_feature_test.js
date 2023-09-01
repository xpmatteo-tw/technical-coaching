const greet_service = require('./hello_feature.js');

test('hello, world!', () => {
    const {status_code, body} = greet_service({});

    expect(status_code).toEqual(200);
    expect(body.message).toEqual("Hello, world!");
});

test('hello, <name>!', () => {
    const {status_code, body} = greet_service({name: "Bob"});

    expect(status_code).toEqual(200);
    expect(body.message).toEqual("Hello, Bob!");
});