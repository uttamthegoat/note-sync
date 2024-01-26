import { connectDB } from "@/utils/feature";
import { Task } from "@/models/task";
import asyncHandler from "@/utils/asyncHandler";
import CustomError from "@/utils/CustomError";

const handler = asyncHandler(async (req, res) => {
  await connectDB();
  
  if (req.method !== "POST") {
    throw new CustomError(400, "Only post method to be applied!");
  }

  await Task.create({
    title: "New task",
    description: "To be completed",
    completed: false,
    user: "shdkhjshs",
  });

  res.send({ message: "hello" });
});

export default handler;
