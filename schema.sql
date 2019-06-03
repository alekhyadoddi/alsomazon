-- Create a MySQL Database called `bamazon`.
DROP DATABASE IF EXISTS bamazon ;
Create database bamazon;

-- 2. Then create a Table inside of that database called `products`.
USE bamazon;
Create table products
(item_id int not null,
product_name varchar(50), 
department_name varchar(100),
price decimal(10,4),
stock_quantity int ,
PRIMARY KEY (item_id)
)