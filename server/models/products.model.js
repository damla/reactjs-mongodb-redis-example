import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    color: String,
    brand: String,
    price: {
      base: mongoose.Number,
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
  return ProductsModel.find();
};

export default ProductsModel;
