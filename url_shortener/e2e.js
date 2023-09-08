#!/usr/bin/env jest --testRegex e2e.js

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
    const response = await getJSON(`${base_url}/kljhdf`, 404);
    expect(response.message).toEqual("Not found");
});

test('hello, world', async () => {
    const response = await getJSON(`${base_url}/greet`, 200);
    expect(response.message).toEqual("Hello, world!");
});

