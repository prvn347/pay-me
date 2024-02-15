import axios from "axios"
import { useEffect, useState } from "react"

export const Balance = ({ value }) => {
    const [balence,setBalence] = useState(0)
    useEffect(()=>{
        axios.get("https://payme-n7nv.onrender.com/api/v1/account/balence",{
            headers: {
                Authorization: "Bearer "+ localStorage.getItem("token")
              }
        })
        .then(resp =>{
            const balence = resp.data.balance.toFixed(1)
            setBalence(balence)
        },[])
    })
    return <div className="flex">
        <div className="font-bold text-lg text-custom-blue">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg text-custom-blue">
            Rs {balence}
        </div>
    </div>
}