-- Truncate tables in the specified order
DELETE FROM CarOption;
DELETE FROM Car;
DELETE FROM Customer WHERE CustomerName IS NULL;
DELETE FROM Customer;
DELETE FROM Dealer;
DELETE FROM Model;
DELETE FROM Brand;
DELETE FROM users;
DROP TABLE Customer;
DROP TABLE Dealer;
DROP TABLE Model;
DROP TABLE Brand;