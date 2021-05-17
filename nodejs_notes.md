# What is Node.js ? 

“As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.”

Asynchronus - does not block other process' from running.

In a situation where :
1. Read File AND THEN Print File Contents
2. Query Database AND THEN Filter Database Query results

Async scenario:
Read and query will run in that order then it will render whichever "event" finishes first.

Sync scenario:
Step 1 will have to complete finish rendering before step 2 can run.
(Can be very time consuming)

## What can Node.js do? 
* Generate dynamic page content
* Create, open, read, write, delete, and close files on the server
* Collect form data
* CRUD data in database.

## Node Modules
Modules are similar to JS libraries

### http module
To use modules, use `require()` with the module
  ie: `var http = require('http');`

Custom modules can be created with `exports.` like below:
exports.myDateTime = function () {
  return Date();
};

http module contains methods like `.createServer`, which creates a server object.
When a `.listen(8080)` is attached to the object, it will listen to port 8080 and the server object will execute its contents.

### fs module
fs = File System 
fs allows CRUD functionality

`fs.readFile()` - read files on the computer
`fs.appendfile()` - appends content to the end of the specified file. If file doesn't exist, file is created
```js
  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
```

`fs.open()` - takes a flag for the 2nd arg. "w" is for writing. If file doesn't exist, an empty file is created
```js
  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
```

`fs.writeFile()` - repalces specified file and content if it exists. If file doesn't exist, a new file, with the specified content, is created
```js
  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
```

`fs.unlink()` - DELETES the file specified
```js
  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
```

`fs.rename()` - RENAMES the file specified
```js
  fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
```


### url module
`var url = require('url');`
ie:
```js 
  var url = require('url');
  var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  var q = url.parse(adr, true);

  console.log(q.host); //returns 'localhost:8080'
  console.log(q.pathname); //returns '/default.htm'
  console.log(q.search); //returns '?year=2017&month=february'

  var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
  console.log(qdata.month); //returns 'february'
```


## NPM - Node Package manager
Packages are JS libraries ready to use
These live in `node_modules` 

To use these packages in js files, simply use `require()` like other modules


## Events in Node.js
Every action on a computer is an event.
Objects in Node.js can fire events.

ie: readStream fires events when opening and closing files.
```js
  var fs = require('fs');
  var rs = fs.createReadStream('./demofile.txt');
  rs.on('open', function () {
    console.log('The file is open');
  });
```

Node has a built-in module called "Events" where we can create-, fire-, and listen for- our own events.
All event properties and methods arae instances of an EventEmitter object
```js
  var events = require('events');
  var eventEmitter = new events.EventEmitter();
```

Custom Event handlers can be assigned to our own events

```js
  var events = require('events');
  var eventEmitter = new events.EventEmitter();

  //Create an event handler:
  var myEventHandler = function () {
    console.log('I hear a scream!');
  }

  //Assign the event handler to an event:
  eventEmitter.on('scream', myEventHandler);

  //Fire the 'scream' event:
  eventEmitter.emit('scream');
```