-- join table 
SELECT role.id,title, department.name AS department,salary
FROM role 
LEFT JOIN department 
ON role.department_id = department.id
ORDER BY role.id
;

SELECT employee.id,employee.first_name,employee.last_name,title,name AS department,salary,
CONCAT(e.first_name," ",e.last_name) AS manager
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
LEFT JOIN department
ON role.department_id = department.id
LEFT JOIN employee e
ON employee.manager_id = e.id
ORDER BY employee.role_id
;