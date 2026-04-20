import { Router } from "express";
import { createPost, getPosts, updatePosts, deletePosts} from "../controllers/post.controllers.js";

const postRouter = Router();

postRouter.route("/create").post(createPost);

postRouter.route("/getpost").get(getPosts);

postRouter.route("/updatepost/:id").patch(updatePosts);

postRouter.route("/deletepost/:id").delete(deletePosts);
export default postRouter