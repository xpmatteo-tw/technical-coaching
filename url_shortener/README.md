


# Url shortener kata

The goals of this kata

1. practice TDD with complex technologies
2. practice outside-in TDD, starting from an e2e acceptance tests.

We will implement a version of the greeter service that will respond over an HTTP connection.  We will use `node`'s native http service.

We want to practice the "double loop" of ATDD:

![We want to practice the "double loop" of ATDD](atdd.png)

## Url shortener procedure

- Start the server with `ls *.js | entr -r node server.js`
- Run `./e2e.js`: one test fails
  - first **fix the greeter unit test**
  - then fix the greeter production code
  - then run the `./e2e.js` again and it should pass
- Unskip the next e2e test, and run the e2e again
- You may continue with the greeter implementation, to practice outside-in development
- You may graduate to the "url_shortener" problem, which is much more interestin


**Remember to always test things with unit tests -- avoid relying on e2e alone.**

## Installation

```shell
npm install key-file-storage
```

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
or
```shell
./e2e.js --watch
```

## Executing the unit tests

```shell
./test.sh
```
or
```shell
./test.sh --watch
```

## How to create test doubles in Jest

This is a mock object:
```javascript
const myFoo = {
    foo: jest.fn(),
}
```

This is how you stub a return value:
```javascript
myFoo.foo.mockReturnValue("something");
```
Now, whenever you invoke `myFoo.foo()`, it will return the string `"something"`.

And this is how you check how the mock function called: if the production
code executes`myFoo.foo('first arg', 'second arg')`, then the following assertion succeeds: 
```javascript
expect(myFoo.foo.mock.calls[0]).toEqual(['first arg', 'second arg']);
```







