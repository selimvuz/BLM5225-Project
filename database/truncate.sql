-- Disable foreign key checks temporarily
PRAGMA foreign_keys
= OFF;

-- Truncate tables in the specified order
DELETE FROM CarOption;
DELETE FROM Car;
DELETE FROM Customer;
DELETE FROM Dealer;
DELETE FROM Model;
DELETE FROM Brand;
DELETE FROM Option;

-- Enable foreign key checks again
PRAGMA foreign_keys = ON;