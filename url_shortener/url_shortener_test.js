const URLShortener = require('./url_shortener.js');
const keyFileStorage = require("key-file-storage").default

let kfs;
beforeAll(() => {
    kfs = keyFileStorage('./data/urls.db')
});

describe("shortening urls", () => {
    xit("shortens the url", async () => {
        const shortener = new URLShortener();

        const short_url = await shortener.shorten('https://www.yahoo.com');

        expect(short_url).toBe('https://tw.ks/5467');
    });

    it("writes shortened url to the db", async () => {
        const urlShortener = new URLShortener();

        const short_url = await urlShortener.shorten('https://www.google.com');

        const retrieved_url = kfs[short_url];
        expect(retrieved_url).toBe('https://www.google.com');
    });
});

describe("retrieving urls", () => {
    it("retrieves full-length url from the db", async () => {
        const urlShortener = new URLShortener();
        kfs['https://short_url.com'] = 'https://www.full_length_url.com';

        const long_url = await urlShortener.retrieve('https://short_url.com');

        expect(long_url).toBe('https://www.full_length_url.com');
    });

    it("raises a 'not found' error when url is not in the db", async () => {
        const urlShortener = new URLShortener();

        await expect(
            urlShortener.retrieve('https://unknown_url.com')
        ).rejects.toThrowError('URL not found: https://unknown_url.com');
    });
});

