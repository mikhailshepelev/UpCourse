INSERT INTO user
VALUES
(1, true, 'mike@icloud.com', 'Alex', 'Johnson', '1234', 'alexj');


INSERT INTO role
VALUES
(1, 'ADMIN'),
(2, 'USER');

INSERT INTO user_roles
VALUES
(1, 1),
(1, 2);