import mongoose, { Schema } from "mongoose";

const OrderDetailsSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, required: true, ref: "Food" },
  quantity: { type: Number, required: true },
  amount: { type: String, required: true },
  orderId: { type: Schema.Types.ObjectId, required: true, ref: "Order" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OrderDetailsModel = mongoose.model("OrderDetails", OrderDetailsSchema);

export default OrderDetailsModel;
