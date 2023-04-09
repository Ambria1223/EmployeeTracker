INSERT INTO department (id, name)
VALUES (001, "Adminstration"),
       (002, "Marketing"),
       (003, "Human Resources"),
       (004, "Sales"),
       (005, "Customer Service");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "manager", 45,000.00, 123),
       (002, "Marketing analyst", 55,000.00, 124),
       (003, "Recruiter", 45,000.00, 125),
       (004, "Sales consultant", 60,000.00, 126),
       (005, "Customer Service Representative", 30,000.00, 127);

INSERT INTO employee (id, first_name, last_name,role_id, manager_id)
VALUES (001, "Lisa", "Barren", 543, 657)
       (002, "Mack", "Johnson", 874, 009)
       (003, "Dean", "Jackson", 487, 187)
       (004, "Cameron", "Willard", 321, 890)
       (005, "Herbert", "Moreland", 409, 189); 
