import express from "express";
const router = express.Router();
import Post from "../models/Post.js";
import jwt from "jsonwebtoken";
import requireAuth from "../middleware/authMiddleware.js";

router.delete("/post/delete/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token === null) return res.status(400).json("No token");
  try {
    const findPost = await Post.findById(id);
    if (!findPost) {
      return res.status(400).json("Post does not exist");
    }
    const user = jwt.verify(token, process.env.MY_SECRET);

    const isAuthor =
      JSON.stringify(user.id) === JSON.stringify(findPost.author);
    if (!isAuthor) {
      return res.status(400).json("You are not the author");
    }
    await Post.findByIdAndDelete({ _id: id });
    return res.status(200).json("Post has been deleted");
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

export default router;
