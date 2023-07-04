/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const cityStudents = studentsList.filter((student) => student.location === city);

  const finalArray = cityStudents.map((student) => {
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
