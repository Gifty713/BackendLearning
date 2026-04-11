// mongoose is used to talk to the mongodb database
import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`\nConnection successful!!
            ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection Error",error)
        process.exit(1)
    }
} 
export default connectDB; 