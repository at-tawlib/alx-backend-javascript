# 0x03. ES6 data manipulation
`JavaScript` -- `ES6`

## Requirements

### [](https://github.com/at-tawlib/alx-backend-javascript/tree/main/0x00-ES6_basic#general)General

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors:  `vi`,  `vim`,  `emacs`,  `Visual Studio Code`
-   All your files should end with a new line
-   A  `README.md`  file, at the root of the folder of the project, is mandatory
-   Your code should use the  `js`  extension
-   Your code will be tested using the  [Jest Testing Framework](https://intranet.alxswe.com/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q "Jest Testing Framework")
-   Your code will be analyzed using the linter  [ESLint](https://intranet.alxswe.com/rltoken/Ttd9w5jERwTErJW3DDbVoQ "ESLint")  along with specific rules that we’ll provide
-   All of your functions must be exported

### [](https://github.com/at-tawlib/alx-backend-javascript/tree/main/0x00-ES6_basic#install-jest-babel-and-eslint-in-your-project-directory)Install Jest, Babel, and ESLint in your project directory:

-   Install Jest using:  `npm install --save-dev jest`
-   Install Babel using:  `npm install --save-dev babel-jest @babel/core @babel/preset-env`
-   Install ESLint using:  `npm install --save-dev eslint`

### [](https://github.com/at-tawlib/alx-backend-javascript/tree/main/0x00-ES6_basic#configuration-files)Configuration files

-   `package.json`
-   `babel.config.js`
-   `.eslintrc.js`  Don’t forget to run  `npm install`  from the terminal of your project folder to install all necessary project dependencies.

## Tasks

### 0. Basic list of objects
-   Files:  [0-get_list_students.js](0-get_list_students.js), [0-main.js](0-main.js)
has a function that returns an array of objects.
The array contains the following students in order:
-   `Guillaume`, id:  `1`, in  `San Francisco`
-   `James`, id:  `2`, in  `Columbia`
-   `Serena`, id:  `5`, in  `San Francisco`

```
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```

### 1. More mapping (use maps on arrays)
Files:  [1-get_list_student_ids.js](1-get_list_student_ids.js), [1-main.js](1-main.js)

has a function  `getListStudentIds`  that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as  `getListStudents`  from the previous task.

If the argument is not an array, the function is returning an empty array.
```
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$ 
```

### 2. Filter
Files:  [2-get_students_by_loc.js](2-get_students_by_loc.js), [2-main.js](2-main.js)
has  a function  `getStudentsByLocation`  that returns an array of objects who are located in a specific city.

It should accept a list of students (from  `getListStudents`) and a  `city`  (string) as parameters.

You must use the  `filter`  function on the array.

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```

### 3. Reduce
Files:  [3-get_ids_sum.js](3-get_ids_sum.js), [3-main.js](3-main.js)
has a function  `getStudentIdsSum`  that returns the sum of all the student ids.
It should accept a list of students (from  `getListStudents`) as a parameter.
You must use the  `reduce`  function on the array.
```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
8
bob@dylan:~$ 
```

### 4. Combine filter and map
File:  [4-update_grade_by_city.js](4-update_grade_by_city.js) , [4-main.js](4-main.js)
Create a function  `updateStudentGradeByCity`  that returns an array of students for a specific city with their new grade

It should accept a list of students (from  `getListStudents`), a  `city`  (String), and  `newGrades`  (Array of “grade” objects) as parameters.

`newGrades`  is an array of objects with this format:

```
  {
    studentId: 31,
    grade: 78,
  }
```

If a student doesn’t have grade in  `newGrades`, the final grade should be  `N/A`.

You must use  `filter`  and  `map`  combined.

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$ 
```
