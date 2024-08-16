// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  const employeeArray = [];
  let addEmployee = true;

  // TODO: Get user input to create and return an array of employee objects
  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");
    
    if (isNaN(salary)) {
      alert("Invalid salary input, will be calculated as default value of $0 (zero).");
      salary = parseFloat(0);
    } else {
      salary = parseFloat(salary);
    }

    // employee object 
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    // employee array
    employeesArray.push(employee);
    // ask if they want to add another employee 
    addEmployee = confirm("Do you want to add another employee?");
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // This will calculate the total salary of all employees
 for (let i = 0; i < employeesArray.lenght; i++) {
  totalSalary += employeesArray[i],salary;

 }
  // TODO: Calculate and display the average salary
const averageSalary = totalSalary / employeesArray.length;

// Log the average salary to the console
console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);

};

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random()* employeesArray.length);

  // selected employee's information
console.log(`Congratulations to ${employeesArray[random.Index].firstName} ${employeesArrat[randomIndex].lastName}, our random winner!`);
};

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
