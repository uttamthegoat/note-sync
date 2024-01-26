const { connectDB } = require("@/utils/feature");
import { User } from "@/models/user";
import CustomError from "@/utils/CustomError";
import asyncHandler from "@/utils/asyncHandler";

const handler = asyncHandler(async (req, res) => {
  if (req.method !== "POST")
    throw new CustomError(400, "Only post method to be applied!");

  await connectDB();

  const { email, name, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists)
    throw new CustomError(401, "You have already registered. Please Sign in!");

  const newUser = new User({
    name,
    email,
    password,
  });

  await newUser.save();
  console.log("User created successfully");

  res.status(200).json({ message: "user created" });
});

export default handler;
