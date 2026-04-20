import express from "express";
import cors from "cors";
// create express app
const app = express(); 
app.use(express.json());
app.use(cors());

// Imports routes
import userRouter from "./routes/auth.route.js"; 

import postRouter from "./routes/post.route.js"
// verifying routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);


// example route: http://localhost:4000/api/v1/users/register

export default app; 