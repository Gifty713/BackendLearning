import express from "express";
// create express app
const app = express(); 
app.use(express.json())

// Imports routes
import router from "./routes/auth.route.js";

// verifying routes
app.use("/api/v1/users", router);


// example route: http://localhost:4000/api/v1/users/register

export default app; 