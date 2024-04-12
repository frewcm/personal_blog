import express from "express";
const router = express.Router();
import Post from "../models/Post.js";

router.get("/get-all-posts", async (req, res) => {
  res
    .status(200)
    .json(
      await Post.find()
        .populate("author", ["first_name", "last_name", "username"])
        .sort({ createdAt: -1 })
        .limit(20)
    );
});

export default router;
