# 0x00. ES6 Basics
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

## Using `const` and `let`
**Files**:  [0-constants.js](0-constants.js) , [0-main.js](0-main.js)
```
bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 
```

## Block Scope
**Files:**  [1-block-scoped.js](1-block-scoped.js),  [1-main.js](1-main.js)
```
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```
## Arrow functions
**Files:** [2-arrow.js](2-arrow.js) , [2-main.js](2-main.js)
```
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```

### Parameter defaults
**Files:** [3-default-parameter.js](3-default-parameter.js) , [3-main.js](3-main.js)
```
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```

## Rest parameter syntax for functions
**Files:* [4-rest-parameter.js](4-rest-parameter.js) , [4-main.js](4-main.js)
```
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```

## The wonders of spread syntax
**Files:**  [5-spread-operator.js](5-spread-operator.js) , [5-main.js](5-main.js)
```
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```
