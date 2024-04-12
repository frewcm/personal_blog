import express from "express";
const router = express.Router();

router.get("/logout-user", (req, res) => {
  res.cookie("token", "").json("Logged out");
});

export default router;
