const fs = require('fs');

function countStudents(path) {
  const students = {}; // holds subjects and students taking them
  const fields = {}; // to hold fields count
  let numberOfStudents = 0;

  try {
    const readFile = fs.readFileSync(path, 'utf-8');
    const rows = readFile.split('\n');
    // start from index of 1 to ignore the headings
    for (let i = 1; i < rows.length; i += 1) {
      if (rows[i] !== '') {
        numberOfStudents += 1;
        const row = rows[i].split(',');
        // if field is not in students, add it, else push it to object
        if (Object.prototype.hasOwnProperty.call(students, row[3])) {
          students[row[3]].push(row[0]);
        } else {
          students[row[3]] = [row[0]];
        }

        // if field is not in fields, add it else increment it
        if (Object.prototype.hasOwnProperty.call(fields, row[3])) {
          fields[row[3]] += 1;
        } else {
          fields[row[3]] = 1;
        }
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
