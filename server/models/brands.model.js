import mongoose from "mongoose";

const BrandSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: String,
    price: [mongoose.Schema.ObjectId],
  },
  { collection: "brand" }
);

let BrandsModel = mongoose.model("brand", BrandSchema);

BrandsModel.getAll = async () => {
  return BrandsModel.find({});
};

export default BrandsModel;
