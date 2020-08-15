# Welcome to UpCourse project!

## About
UpCourse app is the final project for Software Development Academy's Java course.

The idea is simple - it's a training management system application where users can manage educational courses based on their user role. 

There are 3 roles: ADMIN, TEACHER, STUDENT.
Students and teachers have a convenient way to check their schedules. 
Admins can create and change courses, register students and teachers to the courses.

Other features include:
 - logging in with JWT authentication
 - registering as a new user with the default role as student,
 - admin can search users by username
 - and change student-teacher roles,
 - editing profile information,
 - reseting password

Upcourse is running on Spring Boot, Angular and MySQL.

### Running UpCourse app locally

**Prerequisites:**

Make sure you have in you computer installed:
- Java 8
- Maven 
- Angular CLI
- Node JS
- MySQL WorkBench 8.0
- IntelliJ IDEA

**Create new project**
Clone the repository and open new project from Version Control in IntelliJ IDEA.
Paste the link to URL field.

**Database setup**
Open MySQL Workbench
Run following commands on root connection:
- `CREATE USER 'upCourse'@'localhost' IDENTIFIED BY 'upCourse';`
- `GRANT ALL PRIVILEGES ON * . * TO 'upCourse'@'localhost';`
- `ALTER USER 'upCourse'@'localhost' IDENTIFIED WITH mysql_native_password BY 'upCourse';`

**Angular setup**
Run the following commands in /trainingmanager/angularclient folder:
- `npm install`
- `ng serve`

**Run the project**
Run the project in intelliJ.
Then you can access the application at http://localhost:4200/

**Log in or register as a new user**
Log in with following credentials:

as ADMIN
 - username: alexj, password: 1234 
as TEACHER 
 - username: linam, password: 8776
as STUDENT
 - username: johns, password: 3453

OR register and log in as a new student

## Authors

 - [Eeva-Liisa](https://github.com/Eevaliisa)
 - [Ilya](https://github.com/ilyagarkusha)
 - [Mikhail](https://github.com/mikhailshepelev)
 - [Shamshur](https://github.com/Shamshur)

##  Acknowledgments

Big thanks to our ever so patient instructor Hatef Palizgar
and Software Development Academy

## Project status

Work in progress :)
