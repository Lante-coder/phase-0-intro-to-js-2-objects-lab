// Write your solution in this file!
let employee = {
  name: "John Doe",
  streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}


console.log("Original employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Software Engineer");
console.log("Updated employee (non-destructive):", updatedEmployee);
console.log("Original employee after non-destructive update:", employee);


destructivelyUpdateEmployeeWithKeyAndValue(employee, "department", "Engineering");
console.log("Original employee after destructive update:", employee);

const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without address (non-destructive):", employeeWithoutAddress);
console.log("Original employee after non-destructive delete:", employee);

destructivelyDeleteFromEmployeeByKey(employee, "department");
console.log("Original employee after destructive delete:", employee);
