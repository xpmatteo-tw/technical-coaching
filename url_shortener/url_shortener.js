'use strict';

// Changes a long url into a short one
class URLShortener {
    constructor() {
        this.db = new Database();
    }

    async shorten(full_length_url) {
        const short_url = `https://tw.ks/${Math.trunc(Math.random() * 10000)}`;
        await this.db.add(short_url, full_length_url);
        return short_url;
    }

    async retrieve(short_url) {
        const url = await this.db.get(short_url);
        if (!url) {
            throw new Error(`URL not found: ${short_url}`);
        }
        return url;
    }
}

const keyFileStorage = require("key-file-storage").default

async function sleep(timeout) {
    await new Promise(resolve => setTimeout(resolve, timeout));
}

class Database {
    constructor() {
        this.db = keyFileStorage('./data/urls.db')
    }

    async add(short_url, long_url) {
        this.db[short_url] = long_url;
        await sleep(1000);
    }

    async get(short_url) {
        const url = this.db[short_url];
        await sleep(1000);
        return url;
    }
}

module.exports = URLShortener;
