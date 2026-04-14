import express from "express";
import router from "./routes/auth.route";
// create express app
const app = express(); 
app.use(express.json())

// declaring routes
app.use("/api/v1/users", router);

// example route: http://localhost:4000/api/v1/users/register

export default app; 