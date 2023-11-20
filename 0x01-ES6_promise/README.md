# 0x01. ES6 Promises
`JavaScript` -- `ES6`

## Requirements
### General
-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors:  `vi`,  `vim`,  `emacs`,  `Visual Studio Code`
-   All your files should end with a new line
-   A  `README.md`  file, at the root of the folder of the project, is mandatory
-   Your code should use the  `js`  extension
-   Your code will be tested using the  [Jest Testing Framework](https://intranet.alxswe.com/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q "Jest Testing Framework")
-   Your code will be analyzed using the linter  [ESLint](https://intranet.alxswe.com/rltoken/Ttd9w5jERwTErJW3DDbVoQ "ESLint")  along with specific rules that we’ll provide
-   All of your functions must be exported

### Install Jest, Babel, and ESLint in your project directory:
-   Install Jest using:  `npm install --save-dev jest`
-   Install Babel using:  `npm install --save-dev babel-jest @babel/core @babel/preset-env`
-   Install ESLint using:  `npm install --save-dev eslint`

### Configuration files
-  `package.json`
- `babel.config.js`
- `.eslintrc.js`

Don’t forget to run  `npm install`  from the terminal of your project folder to install all necessary project dependencies.

**Response Data Format**
`uploadPhoto`  returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```

`createUser`  returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

### Tasks
**0. Keep every promise you make and only make promises you can keep**
[0-promise.js](0-promise.js) , [0-main.js](0-main.js)

Return a Promise using this prototype  `function getResponseFromAPI()`

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

**1. Don't make a promise...if you know you can't keep it
[1-promise.js](1-promise.js),   [1-main.js](1-main.js)**
return a  `promise`. The parameter is a  `boolean`.
When the argument is:
-   `true`
    -   resolve the promise by passing an object with 2 attributes:
        -   `status`:  `200`
        -   `body`:  `'Success'`
-   `false`
    -   reject the promise with an error object with the message  `The fake API is not working currently`

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

**2. Catch me if you can!**
[2-then.js](2-then.js) ,  [2-main.js](2-main.js)
-   When the Promise resolves, return an object with the following attributes
    -   `status`:  `200`
    -   `body`:  `success`
-   When the Promise rejects, return an empty  `Error`  object
-   For every resolution, log  `Got a response from the API`  to the console

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$ 
```

**3. Handle multiple successful promises**
[3-all.js](3-all.js) , [3-main.js](3-main.js)
Knowing that the functions in  `utils.js`  return promises, use the prototype to collectively resolve all promises and log  `body firstName lastName`  to the console.
```
function handleProfileSignup()
```
In the event of an error, log  `Signup system offline`  to the console
```
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
```
**4. Simple promise**
[4-user-promise.js](4-user-promise.js) , [4-main.js](4-main.js)
returns a resolved promise with this object:
```
{
  firstName: value,
  lastName: value,
}
```
```
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$ 
```

**5. Reject the promises**
[5-photo-reject.js](5-photo-reject.js) , [5-main.js](5-main.js)

Write and export a function named  `uploadPhoto`. It should accept one argument  `fileName`  (string).

The function should return a Promise rejecting with an Error and the string  `$fileName cannot be processed`
```
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$ 
```
**6. Handle multiple promises**
[6-final-user.js](6-final-user.js) , [6-main.js](6-main.js)

Write and export a function named  `handleProfileSignup`. It should accept three arguments  `firstName`  (string),  `lastName`  (string), and  `fileName`  (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
```
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```

```
bob@dylan:~$ npm run dev 6-main.js 
Promise { <pending> }
bob@dylan:~$ 
```

**7. Load balancer**
[7-load_balancer.js](7-load_balancer.js) , [7-main.js](7-main.js)
Write and export a function named  `loadBalancer`. It should accept two arguments  `chinaDownload`  (Promise) and  `USDownload`  (Promise).
The function should return the value returned by the promise that resolved the first.
```
export default function loadBalancer(chinaDownload, USDownload) {

}
```
```
bob@dylan:~$ npm run dev 7-main.js 
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$ 
```

**8. Throw error / try catch**
[8-try.js](8-try.js) , [8-main.js](8-main.js)

Write a function named  `divideFunction`  that will accept two arguments:  `numerator`  (Number) and  `denominator`  (Number).

When the  `denominator`  argument is equal to 0, the function should throw a new error with the message  `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.
```
bob@dylan:~$ npm run dev 8-main.js 
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....

bob@dylan:~$ 
```

**9. Throw an error**
[9-try.js](9-try.js) , [9-main.js](9-main.js)

Write a function named  `guardrail`  that will accept one argument  `mathFunction`  (Function).

This function should create and return an array named  `queue`.

When the  `mathFunction`  function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message  `Guardrail was processed`  should be added to the queue.

Example:
```
[
  1000,
  'Guardrail was processed',
]
```

```
bob@dylan:~$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$ 
```

**10. Await / Async**
[100-await.js](100-await.js) , [100-main.js](100-main.js)
Write an async function named  `asyncUploadUser`  that will call these two functions and return an object with the following format:
```
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```
If one of the async function fails, return an empty object. Example:

```
{
  photo: null,
  user: null,
}
```

```
bob@dylan:~$ npm run dev 100-main.js 
{
  photo: { status: 200, body: 'photo-profile-1' },
  user: { firstName: 'Guillaume', lastName: 'Salva' }
}
bob@dylan:~$ 
```
