import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const generateToken = (res, userId) => {
  const payload = {
    userId: userId,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  
  cookieSetter(res, token, true);
};

export default generateToken;

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("access_token", set ? token : "", {
      httpOnly: true,
      // sameSite: "lax",
      secure: true, //for deployment
      sameSite: "none", //for deployment
      path: "/",
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};
