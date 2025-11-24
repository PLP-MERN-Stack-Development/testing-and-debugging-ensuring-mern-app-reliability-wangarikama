/**
 * Express middleware to check if the authenticated user has an 'admin' role.
 * Assumes a prior middleware (like 'auth') has attached the user object to req.user.
 */
module.exports = (req, res, next) => {
  // Check if user object exists AND the role property is 'admin'
  if (req.user && req.user.role === 'admin') {
    // User is authorized, proceed to the next handler/controller
    next();
  } else {
    // User is not authorized
    res.status(403).json({ 
      message: 'Access denied. Administrator privileges required.' 
    });
  }
};