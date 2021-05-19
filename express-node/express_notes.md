# Express.js

## What is Express?
Unopinionated Web framework written in JS for Node.js runtime environment.

Opinionated frameworks have a "right way" to handle any particular tasks. So it is generally well-understood and well-documented on certain methods. This makes them less flexible on solving problems outside their main domain.

Unopinionated frameworks are more "loose" and have fewer restriction on how to piece components together.
Express handles certain situations with middlewares. (there are a LOT)

* Writes handlers for different HTTP requests at different routes
ie: handles get/posts to "/" or "/activity" etc

* Integrates with "view" to generate responses

* Sets common web app settings like 'ports' and locations of templates used to render a response

* Adds middleware 


## Modules
* `require()` "imports" the module required
* `module.exports` exports modules to be used in other modules

## Asynchronous
Node is single threaded, but non-blocking b/c of async.
Utilize callbacks to for Async situations, but avoid callback hell! 
(http://callbackhell.com/) - LOTS of good notes here

### Route Handlers
  Handles the '/' route
```js
app.get('/', (req, res) => {
  res.send('Hello World!')
});
```
The Express app object has router handlers for all other HTTP verbs, which are used in the same way.
`delete(), get(), post(), put(), merge(), patch(), etc`

`app.all()` - used for any HTTP method.
```js
app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
```

#### express.Router() 
(https://expressjs.com/en/guide/routing.html#express-router)
* Routers allow route prefixes to be added to certain endpoints
  - The below provides access to `/wiki/` and `/wiki/about/`

```js
// wiki.js - Wiki route module
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;

// Then in the main App.js file
const wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);
```

## MIDDLEWARE
https://expressjs.com/en/resources/middleware.html
* HTTP request-response cycles usually end by returning a response to the client.
* Middlewares function typically perform ops on the req or res and then calls the next function in the "stack".
* Middleware and Routing functions are called in the order declared.
  Order may be important so be mindful!
* Almost always, middleware is called before setting routes or else router handlers do not have access to middleware functionality

* MW fn's have a third argument, `next`
`next()` - pass control to the next middleware (or else req is left hangin!)

`npm install ______`
3rd party middlewares are intalled via NPM

`app.use()` - used to call the middleware to the stack for all http responses
`app.get` or other verbs can be specified if mw is specific

```js
const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));

--- OR ---

const express = require('express');
const app = express();

// An example middleware function
let a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
```




------------------------------
------------------------------
------------------------------

#### CALL BACK NOTES / USEFUL INFO
## How to avoid callback hell
1. Keep code shallow
    Don't shove everything into one giant piece aka don't nest functions.
    Separate functions to do individual things.
    Give names and place them at the top level of your program.
2. Modularize
    When functions are separated on the file, consider separating functions again into their own modules and import/export them
3. Handle every single error
    When writing code, make sure errors are handled. No matter how prepared we are, errors can happen as shit breaks.
    Callbacks always reserve the first arg for an error

Notes:
- Don't nest functions. Give them names and place them at the top level of your program
- Use function hoisting to your advantage to move functions 'below the fold'
- Handle every single error in every one of your callbacks. Use a linter like standard to help you with this.
- Create reusable functions and place them in a module to reduce the cognitive load required to understand your code. Splitting your code into small pieces like this also helps you handle errors, write tests, forces you to create a stable and documented public API for your code, and helps with refactoring.

------------------------------
------------------------------
------------------------------






# Sources

### Odin Project
https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/introduction-to-express

### Express web framework - official
https://expressjs.com/
https://expressjs.com/en/resources/middleware.html

### Express MDN
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

### Callback HELL
http://callbackhell.com/