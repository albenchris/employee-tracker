INSERT INTO departments (department_name, id)
VALUES
    ("Management", 1),
    ("Sales", 2),
    ("Accounting", 3),
    ("Customer Service", 4),
    ("Quality Assurance", 5),
    ("Purchasing", 6),
    ("Reception", 7),
    ("Warehouse", 8),
    ("Human Resources", 9),
    ("Temporary", 10);

INSERT INTO roles (title, salary, id)
VALUES
    ("District Manager", 48000, 1),
    ("Salesperson", 45000, 2),
    ("Head Accountant", 43000, 3),
    ("Accountant", 41000, 4),
    ("CS Representative", 40000, 5),
    ("QA Analyst", 40000, 6),
    ("Supplier Relations Rep", 40000, 7),
    ("Receptionist", 35000, 8),
    ("Warehouse Manager", 45000, 9),
    ("Warehouse Associate", 37000, 10),
    ("HR Representative", 46000, 11),
    ("Temp", 30000, 12);

INSERT INTO employees (first_name, last_name, id, manager_id)
VALUES
    ("Michael", "Scott", 1, NULL),
    ("Dwight", "Schrute", 2, 1),
    ("Jim", "Halpert", 3, 1),
    ("Phyllis", "Vance", 4, 1),
    ("Stanley", "Hudson", 5, 1),
    ("Angela", "Martin", 6, 1),
    ("Oscar", "Martinez", 7, 6),
    ("Kevin", "Malone", 8, 6),
    ("Kelly", "Kapoor", 9, 1),
    ("Creed", "Bratton", 10, 1),
    ("Meredith", "Palmer", 11, 1),
    ("Pam", "Beesly", 12, 1),
    ("Darryl", "Philbin", 13, 1),
    ("Roy", "Anderson", 14, 13),
    ("Hidetoshi", "Hasagawa", 15, 13),
    ("Glenn", NULL, 16, 13),
    ("Madge", NULL, 17, 13),
    ("Toby", "Flenderson", 18, NULL),
    ("Ryan", "Howard", 19, 1);