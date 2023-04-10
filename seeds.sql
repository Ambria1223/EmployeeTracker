INSERT INTO department(id, name)
VALUES (001, "Adminstration"),
       (002, "Marketing"),
       (003, "Human Resources"),
       (004, "Sales"),
       (005, "Customer Service");

INSERT INTO role (id, title, salary, department_id)
VALUES (119, "manager", 45000.00, 002),
       (120, "Marketing analyst", 55000.00, 004),
       (121, "Recruiter", 45000.00, 005),
       (122, "Sales consultant", 60000.00, 001),
       (123, "Customer Service Rep", 30000.00, 003);

INSERT INTO employee (id, first_name, last_name,role_id, manager_id)
VALUES (126, "Lisa", "Barren", 120, 127),
       (127, "Mack", "Johnson", 121, null),
       (128, "Dean", "Jackson", 122, 129),
       (129, "Cameron", "Willard",123 , 130),
       (130, "Herbert", "Moreland", 119, 128); 
