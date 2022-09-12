-- create
CREATE TABLE CITIES (
  ID INTEGER PRIMARY KEY,
  CITY char(20) NOT NULL,
  STATE char(20) NOT NULL
);

CREATE TABLE WAREHOUSES (
  WID INTEGER PRIMARY KEY,
  WNAME char(30) NOT NULL,
  LOATION char(20) NOT NULL,
  CITY_ID INTEGER REFERENCES CITIES(ID)
);
CREATE TABLE STORES (
   SID INTEGER PRIMARY KEY,
   STORE_NAME char(20) NOT NULL,
   LOCATION_CITY char(20) NOT NULL,
   WAREHOUSES_ID INTEGER REFERENCES WAREHOUSES(WID)

);
CREATE TABLE CUSTOMER(
  CNO INTEGER PRIMARY KEY ,
  CNAME char(50) NOT NULL,
  ADDR varchar(50) NOT NULL,
  CU_CITY char (20) NOT NULL
);

CREATE TABLE ORDERS (
  ONO INTEGER PRIMARY KEY,
  ODATE date NOT NULL,
  ITEMNO INTEGER,
  CUSTOMER_CNO INTEGER REFERENCES CUSTOMER(CNO)
);

CREATE TABLE ITEMS (
  ITEMNO INTEGER PRIMARY KEY,
  ITEM  char(50),
  DESCRIPTION text,
  WEIGHT decimal(5,2),
  COST decimal(5,2)

);
