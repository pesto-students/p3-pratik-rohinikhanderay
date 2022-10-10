
show databases;
create database pesto_portfolio;
use pesto_portfolio;

ALTER USER 'root'@'localhost' IDENTIFIED BY 'root'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';


create table users(
	cid integer primary key auto_increment,
    fname varchar(20) not null,
    lname varchar(20),
    email varchar(40) not null,
    pass varchar(30)
);

create table assets(
	id integer primary key auto_increment,
	name varchar(30)
);
create table amount_type(
	id integer primary key auto_increment,
	label varchar(30) 
);
create table transactions(
	id integer primary key auto_increment,
    dated date not null,
    cid integer references users(cid),
    asset_type integer references assets(id),
    amount integer not null,
    amount_type integer references amount_type(id)
);
create table invoices(
	id integer primary key auto_increment,
    tid integer references transactions(id),
    image varchar(60)
);
show tables;

select * from users;
select * from assets;
select * from amount_type;
select * from transactions;
select * from invoices;
