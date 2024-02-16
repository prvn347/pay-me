import { useNavigate } from "react-router-dom";
import { Button } from "../component/Button";
import { AppBar } from "../component/AppBar";
import { UnAuthAppBar } from "../component/UnAuthAppBar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export function Home(){

    const navigate = useNavigate()
    return  <div>
        <UnAuthAppBar/>
    <div className=" bg-custom-blue h-screen flex  justify-center">
      
        <div className="flex flex-col justify-center">
            <div className="  p-2">
            <button type="button"  onClick={ ()=>{
                    navigate("/signup")
                }}   className=" bg-white p-2 px-9 text-custom-blue w-full text-sm font-semibold rounded  "> Sign up here</button>
                </div>
                <div className=" p-2">
                <button type="button" onClick={ ()=>{
                    navigate("/signin")
                }} className=" bg-white p-2 px-9 text-custom-blue w-full text-sm font-semibold rounded  "> Sign in here</button>
           </div>
        </div>
       
    </div>
    <SpeedInsights />
    </div>
}