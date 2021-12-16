INSERT INTO department (name)
VALUES ("Floss & Drip"),
    ("Accounting"),
    ("Purpose Driven Development"),
    ("Blade Pushers"),
    ("Crab Walkers");


INSERT INTO roles (title, salary, department_id)
VALUES ("Chief of Floss & Drip", 240000, 1),
    ("Lead Accountant", 140000, 2),
    ("Accountant", 38000, 2),
    ("Carl", 58000, 3),
    ("Lead Bladist", 42000, 4),
    ("Blader", 28000, 4),
    ("Crab King", 40000, 5),
    ("Crab Walker", 26000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Priya", "Madonna", 1, NULL), 
    ("Yelly", "Micks", 2, NULL),
    ("Frank", "Henders", 5, NULL),
    ("Freddy", "Boogaloo", 7, NULL),
    ("Eldritch", "Foster", 8, 4),
    ("Carly", "Bevels", 3, 2),
    ("Terrance", "Note", 8, 4),
    ("Jessi", "Fauks", 3, 2),
    ("Carl", "Barlton", 4, 1),
    ("Ronald", "Carpenter", 6, 3),
    ("Charles", "Dobson", 8, 4),
    ("Walt", "Snigglepuff", 8, 4),
    ("Kristen", "Shnoggles", 6, 3),
    ("Peter", "Mipples", 6, 3);
