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
export {createPost, getPosts}