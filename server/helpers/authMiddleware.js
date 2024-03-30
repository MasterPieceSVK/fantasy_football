const jwt = require("jsonwebtoken");
const isTokenExpired = require("./isTokenExpired");
module.exports = authMiddleware;

function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Token not found" });
      }

      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }

        const isExpired = isTokenExpired(user);
        if (isExpired) {
          return res.status(401).json({ message: "Token expired" });
        }
        if (!user.user_id || !user.username || !user.email) {
          return res
            .status(400)
            .json({ message: "Invalid token. Token code 1" });
        }

        req.user_id = user.user_id;
        req.username = user.username;
        req.email = user.email;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 7" });
  }
}
