import express from "express";
import { CreateFood } from "../controller/foodController";

export const FoodRouter = express.Router();

FoodRouter.post("/createFood", CreateFood);
