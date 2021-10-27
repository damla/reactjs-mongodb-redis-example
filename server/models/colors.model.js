import mongoose from "mongoose";

const ColorSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: String,
    price: [mongoose.Schema.ObjectId],
  },
  { collection: "color" }
);

let ColorsModel = mongoose.model("color", ColorSchema);

ColorsModel.getAll = async () => {
  return ColorsModel.find({});
};

export default ColorsModel;
