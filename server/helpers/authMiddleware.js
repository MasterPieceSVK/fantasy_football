const jwt = require("jsonwebtoken");
const isTokenExpired = require("./isTokenExpired");
const {
  userExists,
  checkAvailabilityOfUsername,
  checkAvailabilityOfEmail,
} = require("../../db/userDb");
module.exports = authMiddleware;

async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Token not found" });
      }

      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, user) => {
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

        const isUser = await userExists(user.user_id);

        if (!isUser) {
          return res.status(404).json({ message: "User doesnt exist" });
        }

        const isUsername = await checkAvailabilityOfUsername(user.username);

        if (!isUsername) {
          return res.status(404).json({ message: "Username doesnt exist" });
        }

        const isEmail = await checkAvailabilityOfEmail(user.email);

        if (!isEmail) {
          return res.status(404).json({ message: "Email doesnt exist" });
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
