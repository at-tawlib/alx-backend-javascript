// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher{
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

  // print teacher function
  function printTeacher(firsName: string, lastName: string): string {
    return(`${firsName.charAt(0).toUpperCase()} . ${lastName.charAt(0).toUpperCase}${lastName.slice()}`);
  }

  interface printTeacherFunction {
    (firsName: string, lastName: string): string;
  }

  