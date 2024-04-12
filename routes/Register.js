import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcryptjs";

router.post("/register-user/", async (req, res) => {
  const { first_name, last_name, username, password } = req.body;
  try {
    if (!first_name | !last_name | !username | !password) {
      res.status(400);
      res.json("Fill all the required fields");
    }

    const salt = bcrypt.genSaltSync(10);

    const newUser = await User.create({
      first_name,
      last_name,
      username,
      password: bcrypt.hashSync(password, salt),
    });

    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

export default router;
