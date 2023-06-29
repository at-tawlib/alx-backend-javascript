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
## 6. Take advantage of template literals
**Files:** [6-string-interpolation.js](6-string-interpolation.js) , [6-main.js](6-main.js)
```
bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
```

## 7. Object property value shorthand syntax
**Files:** [7-getBudgetObject.js](7-getBudgetObject.js) , [7-main.js](7-main.js)
```
bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
```
## 8. No need to create empty objects before adding in properties (Creating objects)
**Files:** [8-getBudgetCurrentYear.js](8-getBudgetCurrentYear.js) , [8-main.js](8-main.js)
```
bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
```

## 9. ES6 method properties
**Files:** [9-getFullBudget.js](9-getFullBudget.js) , [9-main.js](9-main.js)
```
bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
```
## 10. For...of Loops
**Files:** [10-loops.js](10-loops.js) , [10-main.js](10-main.js)
```
bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
```
## 11. Iterator (...)
**Files:** [11-createEmployeesObject.js](11-createEmployeesObject.js) , [11-main.js](11-main.js)
```
bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
```

## 12. Let's create a report object
**Files:** [12-createReportObject.js](12-createReportObject.js) , [12-main.js](12-main.js)
```
bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
```

## 13. Iterating through report objects
**Files:** [100-createIteratorObject.js](100-createIteratorObject.js) , [100-main.js](100-main.js)

Write a function named  `createIteratorObject`, that will take into argument a report Object created with the previous function  `createReportObject`.
This function will return an iterator to go through every employee in every department.
```
bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js 
Bob
Jane
Sylvie
bob@dylan:~$
```
## 14. Iterate through object
**Files:**  [101-iterateThroughObject.js](101-iterateThroughObject.js) , [101-main.js](101-main.js)
Finally, write a function named  `iterateThroughObject`. The function’s parameter  `reportWithIterator`  is the return value from  `createIteratorObject`.
It should return every employee name in a string, separated by  `|`
```
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
> 
```

```
bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js 
Bob | Jane | Sylvie
bob@dylan:~$
```
> Written with [StackEdit](https://stackedit.io/).
