import { useState } from "react";
import CreatePost from "./CreatePost";
import { useEffect } from "react";
const DashBoard=()=>{
    const [create, setCreate] = useState(false);
    const [post, setPost]= useState([]);
    useEffect(()=>{
        const fetchposts =async()=>{
            try {
                const res = await fetch("http://localhost:4000/api/v1/posts/getpost");
                const data = await res.json();
                setPost(data);
            } catch (error) {
                console.log(error)
            }    
        } 
        fetchposts();
    },[])
    return(
        <div>
            <h1 style={{textAlign:"center"}}>DashBoard</h1>
            <div>
                <p onClick={()=>{setCreate(true)}} style={{cursor:"pointer"}}><u>What's on your mind today? Create a Post?</u></p>
                {create && <CreatePost createe={create} setcreatee= {setCreate} />}
            </div>
            <div className="allPosts">
                {
                    post.map(unit=>{
                        return(
                            <div key={unit._id} style={{border:"1px solid magenta", marginBottom:"10px", padding:"10px"}}>
                                <p style={{margin:"0px 0px 0px 0px"}}>Name: {unit.name}</p>
                                <p style={{margin:"5px 0px 0px 0px"}}>Age: {unit.age}</p>
                                <p style={{margin:"5px 0px 0px 0px"}}>Description:{unit.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DashBoard;