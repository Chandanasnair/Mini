CREATE TABLE login(username varchar(20),password VARCHAR(20),primary key(password),foreign key(username)references register(username)on delete cascade);
drop TABLE login;
