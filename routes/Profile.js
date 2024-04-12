import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import requireAuth from "../middleware/authMiddleware.js";

router.get("/profile", requireAuth, (req, res) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader.split(" ")[1];
  if (token === null) return res.status(400).json("No token");
  jwt.verify(token, process.env.MY_SECRET, (error, info) => {
    if (error) {
      res.status(200).json("Not allowed");
      throw error;
    }
    res.json(info);
  });
});

export default router;
