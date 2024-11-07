import mongoose, { Schema } from "mongoose";

const FoodSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredient: {
    type: String,
    required: true,
  },
  price: { type: String },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const FoodModel = mongoose.model("Food", FoodSchema);

export default FoodModel;
