const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  // Check if the Authorization header is present
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Not authorized, no authorization header' });
  }

  // Check if the token starts with 'Bearer'
  if (!req.headers.authorization.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authorized, invalid token format' });
  }

  // Extract the token from the Authorization header
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user information to the request object
    req.user = decoded;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    console.error('Token verification failed:', error.message);
    res.status(401).json({ error: 'Not authorized, token verification failed' });
  }
};
