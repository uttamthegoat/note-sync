import { checkAuth, connectDB } from "../../../utils/feature";
import { Task } from "../../../models/task";
import asyncHandler from "@/utils/asyncHandler";
import CustomError from "@/utils/CustomError";

const handler = asyncHandler(async (req, res) => {
  if (req.method === "PUT") {
    await connectDB();

    const user = await checkAuth(req);
    if (!user) throw new CustomError(401, "Login First");

    const taskId = req.query.id;
    const task = await Task.findById(taskId);
    if (!task) throw new CustomError(404, "Task not found");

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(200).json({
      success: true,
      message: "Task Updated Successfully",
    });
  } else if (req.method === "DELETE") {
    await connectDB();

    const user = await checkAuth(req);
    if (!user) throw new CustomError(401, "Login First");

    const taskId = req.query.id;
    const task = await Task.findById(taskId);
    if (!task) throw new CustomError(404, "Task not found");

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully",
    });
  } else {
    throw new CustomError(400, "Only PUT and DELETE methods on this route!");
  }
});

export default handler;
