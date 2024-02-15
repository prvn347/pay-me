import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./Button";
import { useEffect } from "react";


export function UnAuthAppBar(){
 
  const navigate = useNavigate()

return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4 text-slate-600 cursor-pointer " onClick={()=>{
navigate("/")
    }}>
       <span className="flex"> <span className="text-paytm-blue font-bold">Pay</span><span className=" text-custom-blue font-bold">ME</span></span>
    </div>
    <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
             PayMe karo...
            </div>
            
          
        </div>
</div>
}