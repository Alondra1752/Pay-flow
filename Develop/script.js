// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  let employees = [];
  let addEmployee = true;

  // TODO: Get user input to create and return an array of employee objects
  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salaryInput = prompt("Enter employee's salary:");
    const salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);
    
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    
    employees.push(employee);
    addEmployee = confirm("Do you want to add another employee?");
  }
  return employees;
}

// Function to collect the employee data
const employeeData = collectEmployees();
// This will display the array of employee objects 
console.log(employeeData); 


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // This will calculate the total salary of all employees
  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });
  
  // TODO: Calculate and display the average salary
const averageSalary = totalSalary / employeesArray.length;

// Log the average salary to the console
console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);

};

const employees = [
  {firstName: "John", lastName: "Doe", salary: 50000 },
  {firstName: "Jane", lastName: "Smith", salary: 60000 },
  {firstName: "Alice", lastName: "Johnson", salary: 70000},
];

displayAverageSalary(employees);



// Select a random employee
const getRandomEmployee = function(employeesArray) {

  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random()* employeesArray.length);

  // access the employee object at the random index 
  const randomEmplyee = employeesArray[randomIndex];

  // selected employee's information
  console.log(`Random Employee: ${randomEmployee.firstName} ${randonEmployee.lastName}, Salary: ${randomEmployee.salary}`);
};

// Array of employee objects 
const employees = [
  { firstName: "John", lastName: "Doe", salary: 50000 },
  { firstName: "Jane", lastName: "Smith", salary: 60000 },
  { firstName: "Alice", lastName: "Johnson", salary: 55000 }
];

// Function with array of employees
getRandomEmployee(employees);

// Event Listener for the button
addEmployeesBtn.addEventListener('click', function() {
  const employeeData = collectEmployees();
  console.log('Employee Data:', employeeData);
  displayAverageSalary(employeeData);
  getRandomEmployee(employeeData);
});



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
