import mongoose from "mongoose";

const BrandSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  },
  { collection: "brand" }
);

let BrandsModel = mongoose.model("brand", BrandSchema);

BrandsModel.getAll = async () => {
  return BrandsModel.find({});
};

export default BrandsModel;
