import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();
import Post from "../models/Post.js";
import requireAuth from "../middleware/authMiddleware.js";

router.put("/post/update", requireAuth, async (req, res) => {
  const { id, title, summary, content, catagory } = req.body;
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token === null) return res.status(400).json("No token");

  try {
    const user = jwt.verify(token, process.env.MY_SECRET);
    const findPost = await Post.findById(id);
    if (!findPost) {
      return res.status(400).json("Post does not exit");
    }
    const isAuthor =
      JSON.stringify(user.id) === JSON.stringify(findPost.author);

    if (!isAuthor) {
      return res.status(400).json("You are not the author");
    }
    await Post.updateOne({ _id: id }, { title, summary, content, catagory });

    return res.status(200).json("Post has been updated");
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

export default router;
