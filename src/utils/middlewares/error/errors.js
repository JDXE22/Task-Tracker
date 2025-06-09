export const errorMiddleware = (err, req, res, next) => {
  console.error("An error occurred:", err.message);
  console.error("Stack trace:", err.stack);

  if (err.status === 400) {
    notFoundMiddleware();
  }

  res.status(500).json({
    status: "error",
    message: "An unexpected error occurred. Please try again later.",
  });

  next();
};

const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "Resource not found.",
  });

  next();
};
