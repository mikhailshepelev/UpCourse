INSERT INTO user
VALUES
(1,  true,'alex@icloud.com', 'Alex', 'Johnson', '1234', 'alexj'),
(2,  true,'john@gmail.com', 'John', 'Smith', '3453', 'johns'),
(3,  false,'maria@gmail.com', 'Pamela', 'Kendall', '4321', 'pamk'),
(4,  true, 'mark@gmail.com', 'Mark', 'Won', '1622', 'markw'),
(5,  false,'henry@hotmail.com','Henry', 'Cavill','1212','henryc'),
(6,  true, 'jack@yahoo.com', 'Jack', 'Ryan','1223','jackr'),
(7,  true,'meena@yahoo.com','Meena','Pradhan','1675','meenap'),
(8,  true, 'zenab@hotmail.com','Rahman','Shams', '6566','rahmas'),
(9,  false, 'derek@hotmail.com','Derek','Brian', '1331', 'derekb'),
(10, true, 'lina@gmail.com','Lina','Maria', '8776','linam'),
(11, true, 'riko@yahoo.com','Riko','Cecilio', '5454','riko'),
(12, false,'denis@yahoo.com','Deniss','Jacko', '3668','denisj1234'),
(13, true, 'christopher@yahoo.com', 'Christopher', 'Nolan','9089','chrisn'),
(14, true, 'zilot@gmail.com', 'Zilot','Faridi','7687','zilotf'),
(15, false,'jasper@gmail.com','Ian','Jasper','8997','jasi'),
(16, true,'marika@gmail.com', 'Marika','Mostalika','6890','marika'),
(17, false,'mosh@yahoo,com','Mosh','Malik','5566','moshmaa1'),
(18, true, 'ismail@gmail.com','Ismail','Shroff','7889','ismails'),
(19, true, 'ajit@yahoo.com', 'Ajit','Malik','1222','ajitm'),
(20, false,'fria@yahoo.com', 'Fria','Brown','7886','friab'),
(21, false,'xylo@hotmail.com','Xylo','Wang','8789','xylops'),
(22, true,'nazaz@yahoo.com','Nazaz','Mikail','1212','nazazm'),
(23, true,'danny@yahoo.com','Danny','Denzongpa','1546','dannyd'),
(24, false,'tiger@yahoo.com','Tiger','Shroff','1133','tigers'),
(25, true,'jackie@gmail.com','Jackie','Shroff','1200','jacky'),
(26, false,'robert@gmail.com','Robert','Drowney','1300','robertd'),
(27, true,'chrise@yahoo.com','Chris','Ewans','1450','chrise'),
(28, false,'ewan@gmail.com','Ewan','McGeor','1100','ewanm1212'),
(29, true,'daniel@gmail.com','Daniel','craig','0077','daniel007'),
(30, true,'bond@yahoo.com','James','Bond','1007','james#007'),
(31, false,'iron@gmail.com','Iron','Man','1333','oronm@1223'),
(32, true,'webm@gmail.com','Mark','Web','1234','markw'),
(33, false,'mowgli@yahoo.com','Mowgli','Jen','1999','mowglij'),
(34, true,'thanos@yahoo.com','Thanos','Alpha','1888','thanos1212'),
(35, true,'avenger@gmail.com','Avia','Marika','1981','avia1256');

INSERT INTO role
VALUES
(1, 'ADMIN'),
(2, 'STUDENT'),
(3, 'TEACHER');

INSERT INTO course
VALUES
(2, 'Java Python 2'),
(3, 'Java Tallinn 9'),
(4, 'Java Testing 5'),
(5, 'Java Python 3'),
(6, 'Java Python 4'),
(7, 'Java Python 5'),
(8, 'Java Python 6'),
(9, 'Java Python 7'),
(10, 'Java Tallinn 10'),
(12, 'Java Tallinn 11'),
(13, 'Java Tallinn 12'),
(14, 'Java Tallinn 13'),
(15, 'Java Tallinn 14'),
(17, 'Software Testing 2'),
(18, 'Software Testing 3'),
(19, 'Software Testing 4'),
(20, 'Software Testing 5'),
(21, 'JavaScript 1'),
(22, 'JavaScript 2'),
(23, 'JavaScript 3'),
(24, 'JavaScript 4'),
(26, 'Advance Software Testing 1'),
(27, 'Advance Software Testing 2'),
(28, 'Advance Software Testing 3'),
(29, 'Advance Software Testing 4'),
(30, 'Advance Software Testing 5'),
(32, 'Java Advance 1'),
(33, 'Java Advance 2'),
(34, 'Java Advance 3'),
(35, 'Java Advance 4');


INSERT INTO user_roles
VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10,3),
(11,1),
(12,2),
(13,2),
(14,2),
(15,2),
(16,1),
(17,2),
(18,2),
(19,2),
(20,2),
(21,3),
(22,2),
(23,2),
(24,3),
(25,1),
(26,2),
(27,2),
(28,2),
(29,2),
(30,2),
(31,1),
(32,3),
(33,2),
(34,2),
(35,2);

INSERT INTO course_user
VALUES

(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9),
(2,10),
(2,12),
(2,13),
(2,14),
(2,15),
(2,17),
(2,18),
(3,19),
(3,20),
(3,21),
(3,22),
(3,23),
(3,24),
(3,26),
(4,27),
(4,28),
(4,29),
(4,30),
(4,32),
(5,33),
(5,34),
(5,35);


INSERT INTO topic
VALUES
(1, 'Java Fundamentals', 2, 10),
(2, 'Java Advanced', 3, 10),
(3, 'Java Securities', 4, 32),
(4, 'Python Fundamentals', 5, 24);


INSERT INTO lesson
VALUES
(1, '2020-10-15', 'Java Fundamentals', 1);

