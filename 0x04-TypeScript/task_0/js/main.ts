// create student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// first student instance
const student1: Student = {
  firstName: "Abdul",
  lastName: "Hardi",
  age: 25,
  location: "Accra",
}

// second student instance
const student2: Student = {
  firstName: "Kofi",
  lastName: "Manu",
  age: 20,
  location: "Kumasi",
}

//  create student array to hold students
const studentArray = [student1, student2];

// create table for each student in the array
const table = document.getElementById('studentTable') as HTMLTableElement;

studentArray.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});