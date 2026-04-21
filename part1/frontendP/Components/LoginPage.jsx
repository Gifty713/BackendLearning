import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
const LoginPage = ()=>{
    const [clicked, setClicked] = useState(null);

    const onFocus = (entry)=>{
        setClicked(entry);
    }
    const onBlur = ()=>{
        setClicked(null);
    }
    const [email, setEmail]= useState(null);
    const [password, setPassword]= useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const result = await fetch("http://localhost:4000/api/v1/users/login", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email, password})
            });
            const data = await result.json();
            console.log(data.message)            
            if(data.message === "Login Successful."){
                navigate("/dashboard");      
            }     
        } catch (error) {
            console.log("error:", error)      
        }
    }
    return(
        <div className="signupCont">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}> 
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
                <button type="submit" className="btn" >Login</button>
            </form>
            <p>Don't have an account?</p>
            <Link to="/signup" type="submit" style={{color:"black"}}><u>SignUp</u></Link>
        </div>
    )
}
export default LoginPage