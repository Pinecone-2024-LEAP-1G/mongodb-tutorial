import mongoose from "mongoose";
import { Request, Response } from "express";
import CategoryModel from "../model/category";

export const CreateCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const category = await new CategoryModel({
      name: name,
    }).save();

    res.json({ category: category });
  } catch (error) {
    res.json({ message: error });
  }
};

export const GetCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.json({ categories: categories });
  } catch (error) {
    res.json({ message: error });
  }
};

// export const GetUser = async (req: Request, res: Response) => {
//   const { id } = req.body;
//   try {
//     const objectId = mongoose.Types.ObjectId.createFromHexString(id);
//     console.log(objectId);
//     const user = await UserModel.findById({ _id: objectId });
//     res.json({ user: user });
//   } catch (error) {
//     res.json({ message: error });
//   }
// };

// export const UpdateUser = async (req: Request, res: Response) => {
//   const { id, email } = req.body;
//   try {
//     const objectId = mongoose.Types.ObjectId.createFromHexString(id);

//     const user = await UserModel.findOneAndUpdate(
//       { _id: objectId },
//       { email: email },
//       {
//         new: true,
//       }
//     );
//     res.json({ user: user });
//   } catch (error) {
//     res.json({ message: error });
//   }
// };
