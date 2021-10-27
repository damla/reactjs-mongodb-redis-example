import mongoose from "mongoose";

const ColorSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  },
  { collection: "color" }
);

let ColorsModel = mongoose.model("color", ColorSchema);

ColorsModel.getAll = async () => {
  return ColorsModel.find({});
};

export default ColorsModel;
