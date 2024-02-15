import { useEffect, useState } from "react"
import { AppBar } from "../component/AppBar"
import { BottomWarning } from "../component/BottomWarning"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { InputBox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { UnAuthAppBar } from "../component/UnAuthAppBar"


export const Signin = ()=>{
    const navigate = useNavigate()
    
                useEffect(() => {
                  const token = localStorage.getItem("token");
                  if (token) {
                    // Assuming you want to redirect to the dashboard if the user is already authenticated
                    navigate("/dashboard");
                  }
                }, [navigate]);
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
    return <div>
<UnAuthAppBar/>

    <div className=" bg-custom-blue h-screen flex  justify-center">
        
        <div className="flex flex-col justify-center">
<div className=" rounded-lg bg-white w-80 text-center  p-2 px-4 h-max">
<Heading label={"Sign in"}/>
<SubHeading label={"Enter your credentials to access your account"}/>


<InputBox onChange={(e)=>{
setUsername(e.target.value)
}} placeholder= {"prvn347@gmail.com"}label={"Email"}  />
<InputBox onChange={(e)=>{
    setPassword(e.target.value)
}} placeholder= {"123241321"}label={"Password"}  />
<div className="pt-4">
   <Button label={"Sign in"} onClick={ async()=>{
   const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
        username,
        password
    })
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard")
                // Redirect to dashboard with the first name as query parameter
            
   }} /> 
</div>
<BottomWarning label={"Don't have an account?"} buttonText={"Signup"} to={"/signup"}/>
</div>
        </div>
    </div>
    </div>
}