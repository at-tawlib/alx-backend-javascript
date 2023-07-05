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
Files:  [0-get_list_students.js](0-get_list_students.js), [0-main.js](0-main.js)
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
### 5. Typed Arrays
Files:  [5-typed_arrays.js](5-typed_arrays.js), [5-main.js](5-main.js)

Create a function named  `createInt8TypedArray`  that returns a new  `ArrayBuffer`  with an  `Int8`  value at a specific position.
It should accept three arguments:  `length`  (Number),  `position`  (Number), and  `value`  (Number).
If adding the value is not possible the error  `Position outside range`  should be thrown.

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$ 
```

### 6. Set data structure
File:  [6-set.js](6-set.js), [6-main.js](6-main.js)

Create a function named  `setFromArray`  that returns a  `Set`  from an array.

It accepts an argument (Array, of any kind of element).
```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$ 
```

### 7. More set data structure
File:  [7-has_array_values.js](7-has_array_values.js), [7-main.js](7-main.js)

Create a function named  `hasValuesFromArray`  that returns a boolean if all the elements in the array exist within the set.
It accepts two arguments: a  `set`  (Set) and an  `array`  (Array).
```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
true
false
false
bob@dylan:~$ 
```

### 8. Clean set (set, filter, map, array)
File:  [8-clean_set.js](8-clean_set.js), [8-main.js](8-main.js)

Create a function named  `cleanSet`  that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a  `set`  (Set) and a  `startString`  (String).

When a value starts with  `startString`  you only append the rest of the string. The string contains all the values of the set separated by  `-`.

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
jovi-aparte-appetit

bob@dylan:~$ 
```

### 9. Map data structure
File:  [9-groceries_list.js](9-groceries_list.js), [9-main.js](9-main.js)

Create a function named  `groceriesList`  that returns a map of groceries with the following items (name, quantity):

```
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
```
Result:
```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$ 
```

### 10. More map data structure
Files:  [10-update_uniq_items.js](10-update_uniq_items.js), [10-main.js](10-main.js)

Create a function named  `updateUniqueItems`  that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error  `Cannot process`  should be thrown.

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$ 
```
### 11. Weak link data structure
Files:  [100-weak.js](100-weak.js), [100-main.js](100-main.js)

Export a  `const`  instance of  `WeakMap`  and name it  `weakMap`.

Export a new function named  `queryAPI`. It should accept an endpoint argument like so:

```
  {
    protocol: 'http',
    name: 'getUsers',
  }

```

Track within the  `weakMap`  the number of times  `queryAPI`  is called for each endpoint.

When the number of queries is >= 5 throw an error with the message  `Endpoint load is high`.

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$ 
```

> Written with [StackEdit](https://stackedit.io/).
