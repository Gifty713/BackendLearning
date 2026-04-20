import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios" 
const SignupPage=()=>{
    const [clicked, setClicked] = useState(null);

    const onFocus = (entry)=>{
        setClicked(entry);
    }
    const onBlur = ()=>{
        setClicked(null);
    }

    const [username, setName]= useState(null);
    const [email, setEmail]= useState(null);
    const [password, setPassword]= useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:4000/api/v1/users/register", {username, email, password});
            console.log(result.data);           
        } catch (error) {
            console.log("error:", error)      
        }
    }
    return(
        <div className="signupCont">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="name">
                    <fieldset style={{width:"fit-content", padding:"0", border:"1px solid #575757", marginBottom:"15px"}}>
                        {clicked === "name" && <legend style={{margin:"1px", padding:0, fontSize:"0.9rem"}}>Full Name</legend>}
                        <input type="text" placeholder= {clicked === "name"? "": "FullName" } style={{width:"250px", border:"none", height:"30px"}} onChange={(e)=>{setName(e.target.value)}} onFocus={()=>onFocus("name")} onBlur={onBlur}/>
                    </fieldset>
                </label>
                <label htmlFor="email" >
                    <fieldset style={{width:"fit-content", padding:"0", border:"1px solid #575757", marginBottom:"15px"}}>
                        {clicked === "email" && <legend style={{margin:"1px", padding:0, fontSize:"0.9rem"}}>E-mail Address</legend>}
                        <input type="text" placeholder= {clicked === "email"? "": "E-mail address" } style={{width:"250px", border:"none", height:"30px"}} onChange={(e)=>{setEmail(e.target.value)}} onFocus={()=>onFocus("email")} onBlur={onBlur}/>
                    </fieldset>
                </label>
                <label htmlFor="password" >
                    <fieldset style={{width:"fit-content", padding:"0", border:"1px solid #575757", marginBottom:"15px"}}>
                        {clicked === "password" && <legend style={{margin:"1px", padding:0, fontSize:"0.9rem"}}>Account password</legend>}
                        <input type="password" placeholder= {clicked === "password"? "": "Password" } style={{width:"250px", border:"none", height:"30px"}} onChange={(e)=>{setPassword(e.target.value)}} onFocus={()=>onFocus("password")} onBlur={onBlur}/>
                    </fieldset>
                </label>
                <button type="submit" className="btn">Sign Up</button>
            </form>

            <p>Already have an account?</p>
            <Link to="/login" type="submit" className="login-div">Login</Link>
        </div>
    )
}
export default SignupPage