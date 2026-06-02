export default function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader === 'Bearer valid-token') {
    // Continue to the next middleware or route handler
    next();
  } else {
    // Respond with an unauthorized status
    res.status(401).json({ message: 'Unauthorized' });
  }
}
