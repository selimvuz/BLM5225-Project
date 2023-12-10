-- Insert values into Dealer table
INSERT INTO Dealer
    (DealerID, DealerName, Location)
VALUES
    (1, 'Çamoluk Otomotiv', 'Istanbul'),
    (2, 'Ankara Motors', 'Ankara'),
    (3, 'İzmir Otomotiv Center', 'Izmir'),
    (4, 'Antalya Araba Galerisi', 'Antalya'),
    (5, 'Bursa Otomobil Mağazası', 'Bursa'),
    (6, 'Adana Auto World', 'Adana'),
    (7, 'Trabzon Otomotiv Park', 'Trabzon'),
    (8, 'Gaziantep Araç Merkezi', 'Gaziantep'),
    (9, 'Mersin Motor Plaza', 'Mersin'),
    (10, 'Konya Otomotiv AŞ', 'Konya');


-- Insert values into Customer table
INSERT INTO Customer
    (CustomerID, CustomerName, ContactInfo)
VALUES
    (1, 'Ahmet Yılmaz', 'ahmet.yilmaz@mail.com'),
    (2, 'Ayşe Kaya', 'ayse.kaya@mail.com'),
    (3, 'Mustafa Şahin', 'mustafa.sahin@mail.com'),
    (4, 'Zeynep Demir', 'zeynep.demir@mail.com'),
    (5, 'Mehmet Tekin', 'mehmet.tekin@mail.com'),
    (6, 'Seda Güneş', 'seda.gunes@mail.com'),
    (7, 'Emre Öztürk', 'emre.ozturk@mail.com'),
    (8, 'Aslı Erdoğan', 'asli.erdogan@mail.com'),
    (9, 'Cemil Aksoy', 'cemil.aksoy@mail.com'),
    (10, 'Elif Kılıç', 'elif.kilic@mail.com'),
    (11, 'Burak Yıldırım', 'burak.yildirim@mail.com'),
    (12, 'Nihan Toprak', 'nihan.toprak@mail.com'),
    (13, 'Hakan Kara', 'hakan.kara@mail.com'),
    (14, 'Selin Demirci', 'selin.demirci@mail.com'),
    (15, 'Eren Çetin', 'eren.cetin@mail.com'),
    (16, 'Büşra Aydın', 'busra.aydin@mail.com'),
    (17, 'Kaan Korkmaz', 'kaan.korkmaz@mail.com'),
    (18, 'Pelin Gür', 'pelin.gur@mail.com'),
    (19, 'Cihan Yalçın', 'cihan.yalcin@mail.com'),
    (20, 'Özlem Sevinç', 'ozlem.sevinc@mail.com'),
    (21, 'Can Akın', 'can.akin@mail.com'),
    (22, 'Gamze Atalay', 'gamze.atalay@mail.com'),
    (23, 'Tolga Yılmaz', 'tolga.yilmaz@mail.com'),
    (24, 'Gizem Yücel', 'gizem.yucel@mail.com'),
    (25, 'Kerem Yalın', 'kerem.yalin@mail.com'),
    (26, 'Semih Koçak', 'semih.kocak@mail.com'),
    (27, 'Berkan Enes Bican', 'benes.bican@mail.com'),
    (28, 'Yavuz Selim Doğdu', 'yselim.dogdu@mail.com');


-- Insert values into Brand table
INSERT INTO Brand
    (BrandID, BrandName)
VALUES
    (3, 'Honda'),
    (4, 'Chevrolet'),
    (5, 'Volkswagen'),
    (6, 'BMW'),
    (7, 'Mercedes-Benz'),
    (8, 'Nissan'),
    (9, 'Hyundai'),
    (10, 'Tesla');

-- Insert values into Model table
INSERT INTO Model
    (ModelID, BrandID, ModelName)
VALUES
    (4, 1, 'Prius'),
    (5, 1, 'Highlander'),
    (6, 2, 'Mustang'),
    (7, 2, 'F-150'),
    (8, 2, 'Focus'),
    (9, 2, 'Escape'),
    (10, 2, 'Explorer'),
    (11, 3, 'Accord'),
    (12, 3, 'Civic'),
    (13, 3, 'CR-V'),
    (14, 3, 'Pilot'),
    (15, 3, 'Odyssey'),
    (16, 4, 'Silverado'),
    (17, 4, 'Malibu'),
    (18, 4, 'Equinox'),
    (19, 4, 'Camaro'),
    (20, 4, 'Traverse'),
    (21, 5, 'Golf'),
    (22, 5, 'Passat'),
    (23, 5, 'Tiguan'),
    (24, 5, 'Jetta'),
    (25, 5, 'Atlas'),
    (26, 6, '3 Series'),
    (27, 6, '5 Series'),
    (28, 6, 'X3'),
    (29, 6, 'X5'),
    (30, 6, '7 Series'),
    (31, 7, 'C-Class'),
    (32, 7, 'E-Class'),
    (33, 7, 'GLE'),
    (34, 7, 'GLC'),
    (35, 7, 'S-Class'),
    (36, 8, 'Altima'),
    (37, 8, 'Rogue'),
    (38, 8, 'Sentra'),
    (39, 8, 'Pathfinder'),
    (40, 8, 'Titan'),
    (41, 9, 'Sonata'),
    (42, 9, 'Elantra'),
    (43, 9, 'Tucson'),
    (44, 9, 'Santa Fe'),
    (45, 9, 'Kona'),
    (46, 10, 'Model S'),
    (47, 10, 'Model 3'),
    (48, 10, 'Model X'),
    (49, 10, 'Model Y'),
    (50, 10, 'Cybertruck');


-- Insert values into Car table
-- Insert values into Car table
INSERT INTO Car
    (VIN, ModelID, DealerID, CustomerID)
VALUES
    ('ABC123', 1, 1, 1),
    ('DEF456', 2, 2, NULL),
    ('GHI789', 3, 3, 5),
    ('JKL012', 4, 4, 10),
    ('MNO345', 5, 5, 15),
    ('PQR678', 6, 6, 20),
    ('STU901', 7, 7, 25),
    ('VWX234', 8, 8, NULL),
    ('YZA567', 9, 9, 2),
    ('BCD890', 10, 10, 7),
    ('EFG123', 11, 1, 12),
    ('HIJ456', 12, 2, 17),
    ('KLM789', 13, 3, 22),
    ('NOP012', 14, 4, NULL),
    ('PQR345', 15, 5, 3),
    ('STU678', 16, 6, 8),
    ('VWX901', 17, 7, 13),
    ('YZA234', 18, 8, 18),
    ('BCD567', 19, 9, 23),
    ('EFG890', 20, 10, 28),
    ('HIJ123', 21, 1, NULL),
    ('KLM456', 22, 2, 4),
    ('NOP789', 23, 3, 9),
    ('PQR012', 24, 4, 14),
    ('STU345', 25, 5, 19),
    ('VWX678', 26, 6, 24),
    ('YZA901', 27, 7, NULL),
    ('BCD234', 28, 8, 6),
    ('EFG567', 29, 9, 11),
    ('HIJ890', 30, 10, 16),
    ('KLM123', 31, 1, 21),
    ('NOP456', 32, 2, 26),
    ('PQR789', 33, 3, NULL),
    ('STU012', 34, 4, 1),
    ('VWX345', 35, 5, 30),
    ('YZA678', 36, 6, 5),
    ('BCD901', 37, 7, 10),
    ('EFG234', 38, 8, 15),
    ('HIJ567', 39, 9, 20),
    ('KLM890', 40, 10, 25),
    ('NOP123', 41, 1, NULL),
    ('PQR456', 42, 2, 2),
    ('STU789', 43, 3, 7),
    ('VWX012', 44, 4, 12),
    ('YZA345', 45, 5, 17),
    ('BCD678', 46, 6, 22),
    ('EFG901', 47, 7, NULL),
    ('HIJ234', 48, 8, 3),
    ('KLM567', 49, 9, 8),
    ('NOP890', 50, 10, 13);

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