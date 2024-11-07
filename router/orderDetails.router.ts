import express from "express";
import { CreateOrderDetails } from "../controller/orderDetailsController";

export const OrderDetailsRouter = express.Router();

OrderDetailsRouter.post("/createOrderDetails", CreateOrderDetails);
