import asyncHandler from "@/utils/asyncHandler";
import { checkAuth } from "../../../utils/feature";
import CustomError from "@/utils/CustomError";

const handler = asyncHandler(async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "Only GET Method is allowed");

  const user = await checkAuth(req);
  if (!user) throw new CustomError(res, 401, "Login First");

  res.status(200).json({
    success: true,
    user,
  });
});

export default handler;
