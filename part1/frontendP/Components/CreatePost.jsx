import { useState } from "react";

const CreatePost=({createe, setcreatee})=>{
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [age, setAge] = useState();

    const handleSubmit= async()=>{
        try{
            const respond = await fetch("http://localhost:4000/api/v1/posts/create", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name, description, age})
            });
            const data = await respond.json();
            console.log(data); 
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <p>Name?</p>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                </label>
                <label htmlFor="age">
                    <p>Age?</p>
                    <input type="text" onChange={(e)=>{setAge(e.target.value)}} />
                </label>
                <label htmlFor="description">
                    <p>What's up?</p>
                    <input type="text" onChange={(e)=>{setDescription(e.target.value)}} />
                </label>
                <button type="submit" className="" onSubmit={()=>{setcreatee(false)}}>Submit</button>
            </form>
        </div>
    )
}
export default CreatePost;