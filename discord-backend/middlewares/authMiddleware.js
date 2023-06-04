import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A Token is required for authentication");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;
