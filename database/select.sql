SELECT Brand.BrandID, Brand.BrandName, Model.ModelID, Model.ModelName
FROM Brand, Model
WHERE Brand.BrandID = Model.BrandID;