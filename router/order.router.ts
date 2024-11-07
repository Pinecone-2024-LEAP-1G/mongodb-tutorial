import express from "express";
import {
  CreateOrder,
  GetOrder,
  GetOrders,
} from "../controller/orderController";

export const OrderRouter = express.Router();

OrderRouter.post("/createOrder", CreateOrder)
  .get("/getOrders", GetOrders)
  .get("/getOrder", GetOrder);
