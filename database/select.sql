SELECT Model.ModelID, Model.ModelName, Brand.BrandID, Brand.BrandName
FROM Brand, Model
WHERE Brand.BrandID = Model.BrandID;