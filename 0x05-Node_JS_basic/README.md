# 0x05. NodeJS Basics

### [0. Executing basic javascript with Node JS](0-main.js)

file  `0-console.js`, has function named  `displayMessage`  that prints in  `STDOUT`  the string argument.
```
bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

### [1. Using Process stdin](1-stdin.js)

program named  `1-stdin.js`  that will be executed through command line:
-   It displays the message  `Welcome to Holberton School, what is your name?`  (followed by a new line)
-   The user should be able to input their name on a new line
-   The program should display  `Your name is: INPUT`
-   When the user ends the program, it should display  `This important software is now closing`  (followed by a new line)
-   code uses a child process
```
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
```

### [2. Reading a file synchronously with Node JS](2-read_file.js)

Using the database  [database.csv](database.csv)  (provided in project description)
 a function  `countStudents`  in the file  `2-read_file.js`
-   The script  reads the database file synchronously
-   If the database is not available, it should throw an error with the text  `Cannot load the database`
-   If the database is available, it should log the number of students
-   It should log the number of students in each field, and the list of the student names
-   CSV file can contain empty lines (at the end) - and they are not a valid student!
```
bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```

### [3. Reading a file asynchronously with Node JS](3-read_file_async.js)

Using the database  [database.csv](database.csv)  (provided in project description)
-   Has a function named  `countStudents`. That accepts a path in argument (same as in  `2-read_file.js`)
-   The script should attempt to read the database file asynchronously
-   The function returns a Promise
-   If the database is not available, it should throw an error with the text  `Cannot load the database`
-   If the database is available, it should log the following message to the console  `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format:  `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
```

### [4. Create a small HTTP server using Node's HTTP module](4-http.js)

-   HTTP server should listen on port 1245
-   Displays  `Hello Holberton School!`  in the page body for any endpoint as plain text

In terminal 1:
```
bob@dylan:~$ node 4-http.js
...
```
In terminal 2:
```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
bob@dylan:~$ 
```

### [5. Create a more complex HTTP server using Node's HTTP module](5-http.js)

In a file named  `5-http.js`, create a small HTTP server using the  `http`  module:
-   HTTP server listens on port 1245
-   It should return plain text
-   When the URL path is  `/`, it should display  `Hello Holberton School!`  in the page body
-   When the URL path is  `/students`, it should display  `This is the list of our students`  followed by the same content as the file  `3-read_file_async.js`  (with and without the database) - the name of the database must be passed as argument of the file
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:
```
bob@dylan:~$ node 5-http.js database.csv
...
```
In terminal 2:
```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```

### [6. Create a small HTTP server using Express](6-http_express.js)

-   HTTP server should listen on port 1245
-   Displays  `Hello Holberton School!`  in the page body for the endpoint  `/`

In terminal 1:
```
bob@dylan:~$ node 6-http_express.js
...
```
In terminal 2:
```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html> 
bob@dylan:~$ 
```

### [7. Create a more complex HTTP server using Express](7-http_express.js)
-   It should be assigned to the variable app and this one must be exported
-   HTTP server should listen on port 1245
-   It should return plain text
-   When the URL path is  `/`, it should display  `Hello Holberton School!`  in the page body
-   When the URL path is  `/students`, it should display  `This is the list of our students`  followed by the same content as the file  `3-read_file_async.js`  (with and without the database) - the name of the database must be passed as argument of the file
-   CSV file can contain empty lines (at the end) - and they are not a valid student!
Terminal 1:
```
bob@dylan:~$ node 7-http_express.js database.csv
...
```
In terminal 2:
```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```
