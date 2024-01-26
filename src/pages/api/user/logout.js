import CustomError from "@/utils/CustomError";
import asyncHandler from "@/utils/asyncHandler";
import { cookieSetter } from "@/utils/generateToken";

const handler = asyncHandler(async (req, res) => {
  if (req.method !== "GET")
    throw new CustomError(400, "Only GET method to be applied!");

  cookieSetter(res, null, false);

  res.status(200).json({ success: true, message: "Logged out successfully!" });
});

export default handler;
