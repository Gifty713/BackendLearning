import { User } from "../models/user.model.js";
import router from "../routes/auth.route";

const registerUser = async(req, res)=>{
    try {
        const {username, password, email} = req.body
        // basic validation
        if (!username || !password || !email){
            return res.status(400).json({message:"All fields are important!"})
        }
        // checks if user already exists
        const existing = await User.findOne({email : email.toLowerCase()})
        if (existing){
            return res.status(400).json({message:"User already exists!"})
        }
        // Create user if conditions are fulfilled 
        const user = await User.create({
            username,
            password,
            email:email.toLowerCase(),
            loggedIn: false,
        });
        res.status(201).json({message:`Successfully registered user`, user: {id:user._id, email:user.email, username:user.username }});
    } catch (err) {
        res.status(500).json({message:`Server Error detected`, error: err.message})
    }
}

export {
    registerUser
}