import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import CustomError from "./CustomError";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export const checkAuth = async (req) => {
  const token = req.cookies.access_token;
  if (!token)
    throw new CustomError(400, "Session Expired! Please Login Again!");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return await User.findById(decoded.userId).select("-password");
};

export const checkAuthForTasks = async (req) => {
  const cookie = req.headers.cookie;
  if (!cookie)
    throw new CustomError(400, "Session Expired! Please Login Again!");

  const token = cookie.split("=")[1];
  
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return await User.findById(decoded.userId);
};
