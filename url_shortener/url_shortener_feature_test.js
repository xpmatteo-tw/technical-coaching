const UrlShortenerController = require('./url_shortener_feature.js');

const controller = new UrlShortenerController();

describe('Shortening the url', () => {

    xtest('it shortens the url', () => {
        const {body} = controller.handle('/shorten', {}, {url: 'https://www.google.com'});
        expect(body.shortened_url).toBe('https://tw.ks/1234');
    });

    xtest('it saves the url in the database', () => {

    });

});

