import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";

import profileRoute from "./routes/Profile.js";
import registerRoute from "./routes/Register.js";
import loginRoute from "./routes/Login.js";
import logoutRoute from "./routes/Logout.js";
import postRoute from "./routes/Post.js";
import postUpdateRoute from "./routes/updatePost.js";
import deletePostRoute from "./routes/deletePost.js";
import getAllPostRoute from "./routes/getAllPosts.js";
import getPostRoute from "./routes/getPost.js";

const app = express();
dotenv.config();
connectDB();

const port = process.env.PORT || 5001;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/", profileRoute);
app.use("/api/", registerRoute);
app.use("/api/", loginRoute);
app.use("/api/", logoutRoute);
app.use("/api/", postRoute);
app.use("/api/", postUpdateRoute);
app.use("/api/", deletePostRoute);
app.use("/api/", getAllPostRoute);
app.use("/api/", getPostRoute);

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${port} `);
});
