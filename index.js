const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employeeinfo'
});
let inquirer = require('inquirer');

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});


inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View All Employees',
      'View All Employees By Department',
      'View All Employees By Manager',
      'Add Employee',
      'Remove Employee',
      'Update Employee Role',
      'Update Employee Manager'
    ]
  })
  .then(answer => {
    switch (answer.action) {
      case 'View All Employees':
        viewAllEmployees();
        break;
      case 'View All Employees By Department':
        viewEmployeesByDepartment();
        break;
      case 'View All Employees By Manager':
        viewEmployeesByManager();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'Remove Employee':
        removeEmployee();
        break;
      case 'Update Employee Role':
        updateEmployeeRole();
        break;
      case 'Update Employee Manager':
        updateEmployeeManager();
        break;
    }
  });
  
  
  function viewAllEmployees() {
    connection.query('SELECT * FROM employees', (err, res) => {
      if (err) throw err;
      console.table(res);
    });
  }
  
  function viewEmployeesByDepartment() {
    
    inquirer.prompt({
      name: 'department',
      type: 'list',
      message: 'Which department would you like to view?',
      choices: ['Sales', 'Engineering', 'Finance', 'Legal']
    })
    .then(answer => {
      connection.query('SELECT * FROM employees WHERE department = ?', [answer.department], (err, res) => {
        if (err) throw err;
        console.table(res);
      });
    });
  }
  
  function viewEmployeesByManager() {
    
    inquirer.prompt({
      name: 'manager',
      type: 'list',
      message: 'Which manager would you like to view?',
      choices: ['John Doe', 'Jane Doe', 'Mike Smith']
    })
    .then(answer => {
      connection.query('SELECT * FROM employees WHERE manager = ?', [answer.manager], (err, res) => {
        if (err) throw err;
        console.table(res);
      });
    });
  }

  

    inquirer
      .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?",
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?",
      },
    ]);

    
      