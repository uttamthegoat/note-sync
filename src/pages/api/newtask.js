import { checkAuth, connectDB } from "../../utils/feature";
import { Task } from "../../models/task";
import asyncHandler from "@/utils/asyncHandler";
import CustomError from "@/utils/CustomError";

const handler = asyncHandler(async (req, res) => {
  if (req.method !== "POST")
    throw new CustomError(400, "Only POST Method is allowed");
  await connectDB();

  const { title, description } = req.body;

  if (!title || !description)
    throw new CustomError(400, "Please Enter All fields");

  const user = await checkAuth(req);

  if (!user) throw new CustomError(401, "Login First");

  await Task.create({
    title,
    description,
    user: user._id,
  });

  res.json({
    success: true,
    message: "Task Created",
  });
});

export default handler;
