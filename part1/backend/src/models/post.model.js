import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        description:{
            type: String,
            required: true,
            trim: true
        },
        age:{
            type: Number,
            required: true,
            minLen: 1,
            maxLen: 4
        },

    },
    {timestamps: true}
)

export const Post = mongoose.model("Post", postSchema)