import {Post} from "../models/post.model.js"

// create a post
const createPost= async(req, res)=>{
    try {
        const {name, description, age} = req.body;
        // basic validation
        if (!name||!description||!age)return res.status(401).json({message: "Fill all fields"});
        
        const createp = await Post.create({name,description,age}); 
        
        res.status(200).json({message:"Created successfully", 
            createp:{
                id: createp._id,
                name: createp.name,
                description: createp.description,
                age: createp.age
                
            }
        });
    } catch (err) {
        res.status(501).json({message:"Internal Server Error", error: err})
    };
}

// get all posts
const getPosts = async(req, res)=>{
    try {
        const post = await Post.find();
        res.status(200).json(post)

    } catch (err) {
        res.status(501).json({message:"Internal Server Error!", error: err})
    }
    

}

// update posts
const updatePosts = async(req, res)=>{
    try {
        // correction
        if(Object.keys(req.body).length === 0)return res.status(401).json({message: "No data provided for update"});

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        if (!post)return res.status(404).json({message:"Post not found"});

        res.status(200).json({message:"Post updated successfully.", post})
    } catch (error) {
        res.status(500).json({message:"Internal server error."})
    }
}

const deletePosts = async(req, res)=>{
    try {
        const postdelete = await Post.findByIdAndDelete(req.params.id);
        if (!postdelete)return res.status(404).json({message:"Post not found."});
        res.status(200).json({message:"Post deleted successfully."});
    } catch (err) {
        res.status(501).json({message:"Internal server error.", error:err});
    }
}

export {createPost, getPosts, updatePosts, deletePosts} 