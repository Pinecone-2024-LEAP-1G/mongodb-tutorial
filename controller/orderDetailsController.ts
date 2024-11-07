import mongoose from "mongoose";
import { Request, Response } from "express";
import OrderDetailsModel from "../model/orderDetails";
import OrderModel from "../model/order";

export const CreateOrderDetails = async (req: Request, res: Response) => {
  const { foodId, quantity, amount, orderId } = req.body;
  try {
    const orderDetails = await new OrderDetailsModel({
      foodId,
      quantity,
      amount,
      orderId,
    }).save();
    const { _id } = orderDetails;
    console.log(orderDetails);
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      {
        _id: orderId,
      },
      { $push: { orderItem: _id } },
      { new: true }
    );

    res.json({ orderDetails: orderDetails, updatedOrder: updatedOrder });
  } catch (error) {
    res.json({ message: error });
  }
};

// createOrder -> orderId -> orderDetails -> orderDetailsId -> updateOrder
