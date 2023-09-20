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

async function getJSON(url, expectedStatus = 200) {
    const response = await fetch(url);
    expect(response.status).toBe(expectedStatus);
    return response.json();
}

const BASE_URL = 'http://localhost:8080'

test('not found', async () => {
    const {message} = await getJSON(`${BASE_URL}/kljhdf`, 404);
    expect(message).toEqual("Not found");
});

test('hello, world', async () => {
    const {message} = await getJSON(`${BASE_URL}/greet`, 200);
    expect(message).toEqual("Hello, world!");
});

xtest('hello, <name>', async () => {
    const response = await getJSON(`${BASE_URL}/greet?name=Bob`);
    expect(response.message).toEqual("Hello, Bob!");
});

describe('URL Shortener', () => {
    async function shortenUrl() {
        const payload = {url: "https://www.google.com"};
        const body = await postJSON(`${BASE_URL}/url/shorten`, payload);
        return body.shortenedUrl;
    }

    xtest('shortens the url', async () => {
        const shortenedUrl = await shortenUrl();
        expect(shortenedUrl).toMatch(/https:\/\/tw.ks\/\d+/);
    });

    xtest('retrieves the url', async () => {
        const shortenedUrl = await shortenUrl();
        const {originalUrl} = await getJSON(`${BASE_URL}/url/retrieve?shortenedUrl=${shortenedUrl}`);
        expect(originalUrl).toEqual("https://www.google.com");
    });
});
