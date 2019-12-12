-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.productname, c.categoryname 
from product as p 
join category as c on p.categoryid = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, c.companyname 
from [order] as o 
join customer as c on c.id = o.customerid 
where o.orderdate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.productname, od.quantity 
from orderdetail as od 
join product as p on p.id = od.productid 
where od.orderid = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id as OrderId, c.companyname as Company, e.lastname as Employee 
from [order] as o 
join customer as c on c.id = o.customerid 
join employee as e on e.id = o.employeeid