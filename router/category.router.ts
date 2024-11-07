import express from "express";
import {
  CreateCategory,
  GetCategories,
} from "../controller/categoryController";

export const CategoryRouter = express.Router();

CategoryRouter.post("/createCategory", CreateCategory).get(
  "/getCategories",
  GetCategories
);
