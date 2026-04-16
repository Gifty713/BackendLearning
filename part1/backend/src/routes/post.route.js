import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controllers.js";

const postRouter = Router();

postRouter.route("/create").post(createPost);

postRouter.route("/getpost").get(getPosts);
export default postRouter