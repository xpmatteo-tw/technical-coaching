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

async function getJSON(url) {
    const response = await fetch(url);
    expect(response.status).toBe(200);
    return response.json();
}

const base_url='http://localhost:8080'


test('shortens the url and retrieves it', async () => {
  const payload = {url: "https://www.google.com"};
  const post_url = `${base_url}/shorten`;
  const response = await postJSON(post_url, payload);
  const shortened_url = response.shortened_url;
  expect(shortened_url).toMatch(/https:\/\/tw.ks\/\d+/);

  const get_url = `${base_url}?shortened_url=${shortened_url}`;
  const response2 = await getJSON(get_url);
  expect(response2.original_url).toEqual("https://www.google.com");
});


