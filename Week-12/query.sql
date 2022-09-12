-- Problem1 
SELECT min(WEIGHT) AS WEIGHT FROM ITEMS;

-- Problem2
SELECT WNAME FROM WAREHOUSES WHERE CITY_ID = (SELECT ID FROM CITIES WHERE CITY = 'pune');

-- problem3
SELECT * FROM ITEMS i
INNER JOIN ORDERS o ON o.ITEMNO = i.ITEMNO
WHERE o.CUSTOMER_CNO = (SELECT CNO FROM CUSTOMER WHERE CNAME = 'Mr. Patil');

-- problem4 
with cte AS (
SELECT count(1),WAREHOUSES_ID FROM STORE_NAME group by WAREHOUSES_ID )
SELECT WNAME FROM WAREHOUSES WHERE wid = (SELECT WAREHOUSES_ID FROM cte WHERE count = (SELECT max(count) FROM cte));

-- problem5
with cte AS (
SELECT MIN(ITEMNO),ITEMNO FROM ORDERS group by ITEMNO)
SELECT ITEM FROM IETMS WHERE ITEMNO = (SELECT ITEMNO FROM cte);

-- problem 6 
SELECT * FROM ORDERS