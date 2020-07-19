INSERT INTO user
VALUES
(1, true, 'alex@icloud.com', 'Alex', 'Johnson', '1234', 'alexj'),
(2, true, 'john@gmail.com', 'John', 'Smith', '3453', 'johns'),
(3, false, 'maria@gmail.com', 'Pamela', 'Kendall', '4321', 'pamk');

INSERT INTO role
VALUES
(1, 'ADMIN'),
(2, 'STUDENT'),
(3, 'TEACHER');

INSERT INTO course
VALUES
(1, 'Java Tallinn 9'),
(2, 'Java Python 2');

INSERT INTO user_roles
VALUES
(1, 1),
(1, 2);

INSERT INTO course_user
VALUES
(2, 1),
(1, 2);

INSERT INTO topic
VALUES
(1, 'Java Fundamentals', 1),
(2, 'Java Advanced', 2);

INSERT INTO lesson
VALUES
(1, '2020-10-15', 'Java Fundamentals', 1);

