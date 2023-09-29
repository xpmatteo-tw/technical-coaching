#!/usr/bin/env jest --verbose --testRegex e2e.js

const fetch = require('node-fetch');

async function postJSON(url, payload) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return [response.status, await response.json()];
}

async function getJSON(url) {
    const response = await fetch(url);
    return [response.status, await response.json()];
}

const BASE_URL = 'http://localhost:8080'

test('not found', async () => {
    const [status, body] = await getJSON(`${BASE_URL}/kljhdf`);

    expect(status).toBe(404);
    expect(body.message).toBe("Not found");
});

test('hello, world', async () => {
    const [status, body] = await getJSON(`${BASE_URL}/greet`);

    expect(status).toBe(200);
    expect(body.message).toBe("Hello, world!");
});

xtest('hello, <name>', async () => {
    const [status, body] = await getJSON(`${BASE_URL}/greet?name=Bob`);

    expect(status).toBe(200);
    expect(body.message).toBe("Hello, Bob!");
});

describe('URL Shortener', () => {
    xtest('shortens the url', async () => {
        const [status, body] = await postJSON(`${BASE_URL}/url/shorten`, {url: "https://www.google.com"});

        expect(status).toBe(201);
        expect(body.shortenedUrl).toMatch(/https:\/\/tw.ks\/\d+/);
    });

    xtest('retrieves the url', async () => {
        const [_, {shortenedUrl}] = await postJSON(`${BASE_URL}/url/shorten`, {url: "https://www.google.com"});

        const [status, body] = await getJSON(`${BASE_URL}/url/retrieve?shortenedUrl=${shortenedUrl}`);

        expect(status).toBe(200);
        expect(body.originalUrl).toBe("https://www.google.com");
    });
});
