import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";


export function AppBar(){
 const navigate = useNavigate()
  
const [name,setName] = useState("")
useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/me",{
        headers: {
            Authorization: "Bearer "+ localStorage.getItem("token")
          }

    }).then(resp =>{
        setName(resp.data.name)
    })
})
return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4 text-slate-600 cursor-pointer "onClick={()=>{
        navigate("/")
    }}>
       <span className="flex"> <span className="text-paytm-blue font-bold ">Pay</span><span className=" text-custom-blue font-bold">ME</span></span>
    </div>
    <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 ">
                <span>Hello, <span className="text-custom-blue font-semibold">{name}</span></span>
            </div>
            
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                U
                </div>
            </div>
            <div className="flex flex-col justify-center h-full mr-4" >
               <Button label={"log out"} onClick={()=>{
             

           
                 // Clear the authentication token from localStorage
                 localStorage.removeItem("token");
                 // Redirect the user to the sign-in page
                 navigate("/signin");
     
                
               }}/>
            </div>
        </div>
</div>
}