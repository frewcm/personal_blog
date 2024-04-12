import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();
import Post from "../models/Post.js";
import requireAuth from "../middleware/authMiddleware.js";

router.post("/post", requireAuth, async (req, res) => {
  const { title, summary, content, catagory } = req.body;
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token === null) return res.status(400).json("No token");
  try {
    if (!title | !summary | !content | !catagory) {
      res.status(400).json("Fill all the required");
    }
    const user = jwt.verify(token, process.env.MY_SECRET);
    if (!user) {
      res.status(400).json("Invalid crediential");
    }
    const post = await Post.create({
      title,
      summary,
      content,
      catagory,
      author: user.id,
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

export default router;
