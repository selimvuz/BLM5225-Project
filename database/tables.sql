CREATE TABLE Dealer
(
    DealerID INTEGER PRIMARY KEY AUTOINCREMENT,
    DealerName VARCHAR(255),
    Location VARCHAR(255)
    -- other dealer attributes
);

CREATE TABLE Customer
(
    CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerName VARCHAR(255),
    ContactInfo VARCHAR(255)
    -- other customer attributes
);

CREATE TABLE Brand
(
    BrandID INTEGER PRIMARY KEY AUTOINCREMENT,
    BrandName VARCHAR(255)
    -- other brand attributes
);

CREATE TABLE Model
(
    ModelID INTEGER PRIMARY KEY AUTOINCREMENT,
    BrandID INT,
    ModelName VARCHAR(255),
    FOREIGN KEY (BrandID) REFERENCES Brand(BrandID)
    -- other model attributes
);

CREATE TABLE Car
(
    VIN VARCHAR(17) PRIMARY KEY,
    ModelID INT,
    DealerID INT,
    CustomerID INT,
    FOREIGN KEY (ModelID) REFERENCES Model(ModelID),
    FOREIGN KEY (DealerID) REFERENCES Dealer(DealerID),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
    -- other car attributes
);

CREATE TABLE CarOption
(
    CarID VARCHAR(17),
    OptionID INT,
    PRIMARY KEY (CarID, OptionID),
    FOREIGN KEY (CarID) REFERENCES Car(VIN)
);

CREATE TABLE users
(
    email VARCHAR(255) PRIMARY KEY UNIQUE,
    password VARCHAR(255)
);