import { checkAuth, checkAuthForTasks, connectDB } from "../../utils/feature";
import { Task } from "../../models/task";
import asyncHandler from "@/utils/asyncHandler";
import CustomError from "@/utils/CustomError";

const handler = asyncHandler(async (req, res) => {
  if (req.method !== "GET")
    throw new CustomError(400, "Only GET Method is allowed");
  await connectDB();

  const user = await checkAuthForTasks(req);
  if (!user) throw new CustomError(401, "Login First");

  const mytasks = await Task.find({ user: user._id });

  res.json({
    success: true,
    tasks: mytasks,
  });
});

export default handler;
