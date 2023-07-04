/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  // filter students by the city
  const cityStudents = studentsList.filter((student) => student.location === city);

  const finalArray = cityStudents.map((student) => {
    // check if student's grade is in list of grade or assign 'N/A'
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);

    if (studentGrade.length !== 0) {
      student.grade = studentGrade[0].grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
  return finalArray;
}
