const express = require('express');
const fs = require('fs')

function countStudents(path) {
  const students = {}; // holds subjects and students taking them
  const fields = {}; // to hold fields count
  let numberOfStudents = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let statement = '';
        const rows = data.toString().split('\n');
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
        statement += `Number of students: ${numberOfStudents}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            statement += `Number of students in ${key}: ${value}. `;
            statement += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(statement);
      }
    });
  });
}

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((statement) => {
    res.send(['This is the list of our students', statement].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen('1245');

module.exports = app;
