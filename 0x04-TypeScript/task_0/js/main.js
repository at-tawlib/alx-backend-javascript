var student1 = {
    firstName: "Abdul",
    lastName: "Hardi",
    age: 25,
    location: "Accra",
};
var student2 = {
    firstName: "Kofi",
    lastName: "Manu",
    age: 20,
    location: "Kumasi",
};
var studentArray = [student1, student2];
var table = document.getElementById('studentTable');
studentArray.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});