import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: String,
    color: String,
    brand: String,
    price: {
      base: mongoose.Decimal128,
      discountAmount: Number,
    },
    createdAt: Date,
    imgUrl: String,
  },
  { collection: "product" }
);

let ProductsModel = mongoose.model("product", ProductSchema);

ProductsModel.getById = async (id) => {
  return await ProductsModel.findById(id).exec();
};

ProductsModel.getAll = async () => {
  return ProductsModel.find({});
};

export default ProductsModel;
