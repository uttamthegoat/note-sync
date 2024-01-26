import mongoose from "mongoose";
import bcrypt from "bcrypt";
import CustomError from "@/utils/CustomError";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password too short!"],
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPasswords = async function (enteredPassword) {
  if (!enteredPassword || !this.password) {
    console.log(this.password);
    throw new CustomError(400, "password not found!");
  }
  const match = await bcrypt.compare(enteredPassword, this.password);
  return match;
};

export const User = mongoose.model("User", userSchema);
