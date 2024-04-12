import jwt from "jsonwebtoken";

const requireAuth = async (req, res, next) => {
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "No Authorization header" });
  }
  const token = authHeader.split(" ")[1];
  if (token === null) return res.status(400).json("No token");
  if (token) {
    jwt.verify(token, process.env.MY_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(400).json("No token coming from req.cookie");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  }
};
export default requireAuth;
