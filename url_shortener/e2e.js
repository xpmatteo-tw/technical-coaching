#!/usr/bin/env jest --verbose --testRegex e2e.js

if (typeof fetch === "undefined") {
    console.log("Please install node version 18 or later")
    process.exit(1)
}

async function postJSON(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    expect(response.status).toBe(201);
    return response.json();
}

async function getJSON(url, expected_status = 200) {
    const response = await fetch(url);
    expect(response.status).toBe(expected_status);
    return response.json();
}

const base_url = 'http://localhost:8080'

test('not found', async () => {
    const {message} = await getJSON(`${base_url}/kljhdf`, 404);
    expect(message).toEqual("Not found");
});

test('hello, world', async () => {
    const {message} = await getJSON(`${base_url}/greet`, 200);
    expect(message).toEqual("Hello, world!");
});

xtest('hello, <name>', async () => {
    const response = await getJSON(`${base_url}/greet?name=Bob`);
    expect(response.message).toEqual("Hello, Bob!");
});

xtest('shortens the url and retrieves it', async () => {
    const payload = {url: "https://www.google.com"};
    const post_url = `${base_url}/shorten`;
    const {shortened_url} = await postJSON(post_url, payload);
    expect(shortened_url).toMatch(/https:\/\/tw.ks\/\d+/);

    const get_url = `${base_url}?shortened_url=${shortened_url}`;
    const {original_url} = await getJSON(get_url);
    expect(original_url).toEqual("https://www.google.com");
});
