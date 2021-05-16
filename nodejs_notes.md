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

