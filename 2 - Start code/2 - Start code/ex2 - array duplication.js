// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Kea", age: 20, ID: "01" },
  { firstName: "Bình", lastName: "Tra", age: 22, ID: "02" },
  { firstName: "Cẩm", lastName: "Lee", age: 21, ID: "03" },
  { firstName: "An", lastName: "Phany", age: 19, ID: "04" }, // Duplicate first name
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student's first name
 * @param {string} lastName - the student's last name
 * @param {number} newAge  - the student's new age
 * @param {string}} id - the student's unique id
 */
function updateStudentAge(firstName, lastName, newAge, id) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName && s.ID === id);
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An age to 30
updateStudentAge("An", "Kea", 30, "01");

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));