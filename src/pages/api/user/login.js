const { connectDB } = require("@/utils/feature");
import { User } from "@/models/user";
import CustomError from "@/utils/CustomError";
import asyncHandler from "@/utils/asyncHandler";
import generateToken from "@/utils/generateToken";

const handler = asyncHandler(async (req, res) => {
  if (req.method !== "POST")
  throw new CustomError(400, "Only post method to be applied!");
  
await connectDB();

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new CustomError(401, "Please register first!");

  const comparePassword = await user.matchPasswords(password);
  if (!comparePassword)
    throw new CustomError(401, "Password Incorrect! Try again.");

  generateToken(res, user._id);

  res.status(201).json({
    success: true,
    message: "Login successfull!",
    user,
  });
});

export default handler;
