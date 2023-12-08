-- Insert values into Dealer table
INSERT INTO Dealer
    (DealerID, DealerName, Location)
VALUES
    (1, 'ABC Motors', 'City A'),
    (2, 'XYZ Autos', 'City B');

-- Insert values into Customer table
INSERT INTO Customer
    (CustomerID, CustomerName, ContactInfo)
VALUES
    (1, 'John Doe', 'john@example.com'),
    (2, 'Jane Smith', 'jane@example.com');

-- Insert values into Brand table
INSERT INTO Brand
    (BrandID, BrandName)
VALUES
    (1, 'Toyota'),
    (2, 'Ford');

-- Insert values into Model table
INSERT INTO Model
    (ModelID, BrandID, ModelName)
VALUES
    (1, 1, 'Camry'),
    (2, 1, 'Corolla'),
    (3, 2, 'Fusion');

-- Insert values into Car table
INSERT INTO Car
    (VIN, ModelID, DealerID, CustomerID)
VALUES
    ('ABC123', 1, 1, 1),
    ('DEF456', 2, 2, NULL);
-- Car in inventory

-- Insert values into CarOption table
INSERT INTO CarOption
    (CarID, OptionID)
VALUES
    ('ABC123', 1),
    -- Car with Leather Seats
    ('ABC123', 2),
    -- Car with Sunroof
    ('DEF456', 2);  -- Another car with Sunroof