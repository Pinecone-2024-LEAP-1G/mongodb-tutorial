import express, { Request, Response } from "express";
import { connectDb } from "./database";
import { UserRouter } from "./router/user.router";
import { CategoryRouter } from "./router/category.router";
import { FoodRouter } from "./router/food.router";
import { OrderRouter } from "./router/order.router";
import { OrderDetailsRouter } from "./router/orderDetails.router";

const app = express();

app.use(express.json());

const port = 8000;

app.use("/", UserRouter);
app.use("/", CategoryRouter);
app.use("/", FoodRouter);
app.use("/", OrderRouter);
app.use("/", OrderDetailsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

const server = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
  });
};

server();
