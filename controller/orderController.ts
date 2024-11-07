import { Request, Response } from "express";
import OrderModel from "../model/order";

export const CreateOrder = async (req: Request, res: Response) => {
  const {
    userId,
    totalPrice,
    orderStatus,
    district,
    khoroo,
    apartment,
    orderItem,
  } = req.body;
  try {
    const order = await new OrderModel({
      userId,
      totalPrice,
      orderStatus,
      district,
      khoroo,
      apartment,
      orderItem,
    }).save();

    res.json({ order: order });
  } catch (error) {
    res.json({ message: error });
  }
};

export const GetOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find();
    console.log(orders);
    res.json({ orders: orders });
  } catch (error) {
    res.json({ message: error });
  }
};

export const GetOrder = async (req: Request, res: Response) => {
  const { orderId } = req.body;
  try {
    const orders = await OrderModel.findById({ _id: orderId }).populate({
      path: "orderItem",
      populate: { path: "foodId" },
    });

    console.log(orders);
    res.json({ orders: orders });
  } catch (error) {
    res.json({ message: error });
  }
};
