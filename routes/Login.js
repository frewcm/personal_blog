import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

router.post("/login-user", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({ username });
    if (!findUser) {
      res.status(400);
      res.json("Not registered");
    }
    const correctPass = await bcrypt.compare(password, findUser.password);
    if (!correctPass) {
      res.status(400);
      res.json("Incorrect password");
    }
    const token = jwt.sign(
      {
        id: findUser._id,
        first_name: findUser.first_name,
        last_name: findUser.last_name,
        username: findUser.username,
      },
      process.env.MY_SECRET
    );
    res.json({
      token: token,
      id: findUser._id,
      first_name: findUser.first_name,
      last_name: findUser.last_name,
      username: findUser.username,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

export default router;
