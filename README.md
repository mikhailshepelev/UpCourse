# Welcome to UpCourse project!

## Introduction
UpCourse is a training management system application where users can manage educational courses based on their user role. 
Students can enroll in courses and see their schedules. 
Teachers can add lessons, topics and add study materials to courses and see their teaching schedule. 
Admins can create and change courses, register students and teachers.
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

### Work in progress
At the moment you can only access the application as an admin user, see and modify courses, their topics and lessons.
