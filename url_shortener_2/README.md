
## Starting the server
```shell
node server.js
```

If you want to restart the server every time any file is changed, do

```shell
ls *.js | entr -r node server.js
```

## Executing the end-to-end tests

Start the server, then

```shell
./e2e.js
```

## Hints with Node built-in http


Responding to a get request
```javascript
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({foo: "bar"}));
})
```

Parsing the query string:
```javascript
http.createServer((req, res) => {
  const parsed_url = new URL(req.url, `http://${hostname}:${port}`);
  const params = Object.fromEntries(parsed_url.searchParams);
  
  // etc.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({foo: "bar"}));
})
```

