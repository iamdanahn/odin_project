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
Utilize callbacks to for Async situations, but avoid callback hell! (http://callbackhell.com/)


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