import Errorhandler from "./Errorhandler";

const asyncHandler = (func) => {
  return (req, res,next) => {
    return func(req, res,next).catch((error) => Errorhandler(error, req, res,next));
  };
};

export default asyncHandler;
