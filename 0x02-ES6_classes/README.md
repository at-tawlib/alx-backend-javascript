# 0x02. ES6 classes
`OOP` -- `JavaScript` -- `ES6`

#### Install Jest, Babel, and ESLint
in your project directory:
-   Install Jest using:  `npm install --save-dev jest`
-   Install Babel using:  `npm install --save-dev babel-jest @babel/core @babel/preset-env`
-   Install ESLint using:  `npm install --save-dev eslint`

#### Configuration files
-  `package.json`
- `babel.config.js`
-  `.eslintrc.js`

Don’t forget to run  `$ npm install`  when you have the  `package.json`

### Tasks
---
[0-classroom.js](0-classroom.js) , [0-main.js](0-main.js)

Implement a class named  `ClassRoom`:
-   Prototype:  `export default class ClassRoom`
-   It should accept one attribute named  `maxStudentsSize`  (Number) and assigned to  `_maxStudentsSize`

```
bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
```
---
[1-make_classrooms.js](1-make_classrooms.js) , [1-main.js](1-main.js)

Import the  `ClassRoom`  class from  `0-classroom.js`.
Implement a function named  `initializeRooms`. It should return an array of 3  `ClassRoom`  objects with the sizes 19, 20, and 34 (in this order).

```
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$ 
```
---

[2-hbtn_course.js](2-hbtn_course.js) ,  [2-main.js](2-main.js)
Implement a class named  `HolbertonCourse`:
-   Implement a getter and setter for each attribute.
```
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ 
```
---
**3. Methods, static methods, computed methods names..... MONEY**
[3-currency.js](3-currency.js) , [3-main.js](3-main.js)
Implement a class named  `Currency`:

-   - Constructor attributes:
    -   `code`  (String)
    -   `name`  (String)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named  `displayFullCurrency`  that will return the attributes in the following format  `name (code)`.

```
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
```
---
**4. Pricing**
[4-pricing.js](4-pricing.js) , [4-main.js](4-main.js)

Implement a class named  `Pricing`:
-   Constructor attributes:
    -   `amount`  (Number)
    -   `currency`  (Currency)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named  `displayFullPrice`  that returns the attributes in the following format  `amount currency_name (currency_code)`.
-   Implement a static method named  `convertPrice`. It should accept two arguments:  `amount`  (Number),  `conversionRate`  (Number). The function should return the amount multiplied by the conversion rate.

```
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
```
---

**5. A Building**
[5-building.js](5-building.js), [5-main.js](5-main.js)

Implement a class named  `Building`:
-   Constructor attributes:
    -   `sqft`  (Number)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   Implement a getter for each attribute.
-   Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named  `evacuationWarningMessage`.
    -   If a class that extends from it does not have a  `evacuationWarningMessage`  method, throw an error with the message  `Class extending Building must override evacuationWarningMessage`

```
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
```
---
**6. Inheritance**
[6-sky_high.js](6-sky_high.js) , [6-main.js](6-main.js)

Import  `Building`  from  `5-building.js`.
Implement a class named  `SkyHighBuilding`  that extends from  `Building`:
-   Constructor attributes:
    -   `sqft`  (Number) (must be assigned to the parent class  `Building`)
    -   `floors`  (Number)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   Implement a getter for each attribute.
-   Override the method named  `evacuationWarningMessage`  and return the following string  `Evacuate slowly the NUMBER_OF_FLOORS floors`.

```
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$ 
```
---
 **7. Airport**
[7-airport.js](7-airport.js) , [7-main.js](7-main.js)

Implement a class named  `Airport`:
-   Constructor attributes:
    -   `name`  (String)
    -   `code`  (String)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   The default string description of the class should return the airport  `code`  (example below).

```
bob@dylan:~$ npm run dev 7-main.js 
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
bob@dylan:~$ 
```
---

**8. Primitive - Holberton Class**
[8-hbtn_class.js](8-hbtn_class.js) , [8-main.js](8-main.js)

Implement a class named  `HolbertonClass`:
-   Constructor attributes:
    -   `size`  (Number)
    -   `location`  (String)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   When the class is cast into a  `Number`, it should return the size.
-   When the class is cast into a  `String`, it should return the location.
```
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
```
---

**9. Hoisting**
[9-hoisting.js](9-hoisting.js) , [9-main.js](9-main.js)

Fix this code and make it work.

```
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
```

Result:

```
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$ 
```
---
**10. Vroom**
[10-car.js](10-car.js) , [10-main.js](10-main.js)
Implement a class named  `Car`:
-   Constructor attributes:
    -   `brand`  (String)
    -   `motor`  (String)
    -   `color`  (String)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   Add a method named  `cloneCar`. This method should return a new object of the class.

Hint: Symbols in ES6

```
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$ 
```
---
**11. EVCar**
[100-evcar.js](100-evcar.js) , [100-main.js](100-main.js)

Import  `Car`  from  `10-car.js`.
Implement a class named  `EVCar`  that extends the  `Car`  class:
-   Constructor attributes:
    -   `brand`  (String)
    -   `motor`  (String)
    -   `color`  (String)
    -   `range`  (String)
-   Each attribute must be stored in an “underscore” attribute version (ex:  `name`  is stored in  `_name`)
-   For privacy reasons, when  `cloneCar`  is called on a EVCar object, the object returned should be an instance of  `Car`  instead of  `EVCar`.
```
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$ 

```

> Written with [StackEdit](https://stackedit.io/).
