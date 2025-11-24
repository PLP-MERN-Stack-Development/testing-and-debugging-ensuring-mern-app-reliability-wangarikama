/**
 * Global Express Error Handler Middleware.
 * Standardizes error responses and logs the error stack.
 * @param {Error} err - The error object.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`);
  console.error(err.stack); 

  // Determine the status code (default to 500 if the error didn't set one)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Send the standardized error response
  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;