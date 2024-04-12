import express from "express";
const router = express.Router();
import Post from "../models/Post.js";

router.get("/get-post/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findPost = await Post.findById(id).populate("author", [
      "first_name",
      "last_name",
      "username",
    ]);

    if (!findPost) {
      return res.status(400).json("Post does not exist");
    }
    return res.json(findPost);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

export default router;
