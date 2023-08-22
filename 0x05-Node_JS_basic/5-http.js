const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((statement) => {
      const printOut = statement.slice(0, -1);
      res.end(printOut);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen('1245', '127.0.0.1', () => { });

module.exports = app;
