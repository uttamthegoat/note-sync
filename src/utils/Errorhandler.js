const Errorhandler = (error, req, res,next) => {
  let statusCode = error.statusCode || 500;
  let success = error.success || false;
  let message = error.message || "Internal Server Error";

  // if (error.name === "CastError" && error.path === "_id") {
  //   statusCode = 500;
  //   message = "Invalid Post ID";
  // }

  // if (error.name === "TokenExpiredError") {
  //   statusCode = 401;
  //   message = "Session Expired!";
  // }
  res.status(statusCode).json({
    success,
    message,
  });
};

export default Errorhandler;
