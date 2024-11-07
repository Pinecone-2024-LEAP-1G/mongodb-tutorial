import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  totalPrice: { type: String, required: true },
  orderStatus: {
    type: String,
    enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
    default: "Ordered",
    required: true,
  },
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  apartment: { type: String, required: true },
  orderItem: [{ type: Schema.Types.ObjectId, ref: "OrderDetails" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;
