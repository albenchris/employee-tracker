INSERT INTO departments (department_name)
VALUES
    ("Administration"),
    ("Sales"),
    ("Accounting"),
    ("Customer Service"),
    ("Quality Assurance"),
    ("Purchasing"),
    ("Warehouse"),
    ("Human Resources");

INSERT INTO roles (title, salary, department_name, manager_id)
VALUES
    ("Regional Manager", 48000, "Administration", 1),
    ("Salesperson", 45000, "Sales", NULL),
    ("Head Accountant", 43000, "Accounting", 2),
    ("Accountant", 41000, "Accounting", NULL),
    ("CS Representative", 40000, "Customer Service", NULL),
    ("QA Analyst", 40000, "Quality Assurance", NULL),
    ("Supplier Relations Rep", 40000, "Purchasing", NULL),
    ("Receptionist", 35000, "Administration", NULL),
    ("Warehouse Manager", 45000, "Warehouse", 3),
    ("Warehouse Associate", 37000, "Warehouse", NULL),
    ("HR Representative", 46000, "Human Resources", NULL),
    ("Temp", 30000, "Human Resources", NULL);

INSERT INTO employees (first_name, last_name, title, manager_title)
VALUES
    ("Michael", "Scott", "Regional Manager", NULL),
    ("Dwight", "Schrute", "A.R.M.", "Regional Manager"),
    ("Jim", "Halpert", "Salesperson", "Regional Manager"),
    ("Phyllis", "Vance", "Salesperson", "Regional Manager"),
    ("Stanley", "Hudson", "Salesperson", "Regional Manager"),
    ("Angela", "Martin", "Head Accountant", "Regional Manager"),
    ("Oscar", "Martinez", "Accountant", "Head Accountant"),
    ("Kevin", "Malone", "Accountant", "Head Accountant"),
    ("Kelly", "Kapoor", "CS Representative", "Regional Manager"),
    ("Creed", "Bratton", "QA Analyst", "Regional Manager"),
    ("Meredith", "Palmer", "Supplier Relations Rep", "Regional Manager"),
    ("Pam", "Beesly", "Receptionist", "Regional Manager"),
    ("Darryl", "Philbin", "Warehouse Manager", "Regional Manager"),
    ("Roy", "Anderson", "Warehouse Associate", "Warehouse Manager"),
    ("Hidetoshi", "Hasagawa", "Warehouse Associate", "Warehouse Manager"),
    ("Toby", "Flenderson", "HR Representative", NULL),
    ("Ryan", "Howard", "Temp", "Regional Manager");