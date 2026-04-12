import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLen: 1,
            maxLen: 30,
        },
        password:{
            type: String,
            required: true,
            minLen: 6,
            maxLen: 40,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,  
        }
    },
    {
        timestamps:true
    }
);
export const User = mongoose.model("User", userSchema);