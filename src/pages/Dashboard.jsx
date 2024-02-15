import { useNavigate } from "react-router-dom"
import { AppBar } from "../component/AppBar"
import { Balance } from "../component/Balence"
import { SendMoney } from "../component/SendMoney"
import { Users } from "../component/Users"
import { useEffect } from "react"

export const DashBoardPage = ()=>{
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        // Assuming you want to redirect to the dashboard if the user is already authenticated
        navigate("/dashboard");
      }else{
        navigate("/signin")
      }
    }, [navigate]);

    return <div>
        <div>
            <AppBar/>
          
            
        </div>
     <div className="m-6">
            <Balance/>
            <Users/>
</div>
        
    </div>
}