import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NotFound } from "./component/NotFound";
import { Signup } from "./pages/SingUp";
import { Signin } from "./pages/SignIn";
import { DashBoardPage } from "./pages/Dashboard";
import { SendMoney } from "./component/SendMoney";
import { Home } from "./pages/Home";

function App() {

  return (<div>
    
        <Router>
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin"element = {<Signin/>}/>
            <Route path="/dashboard" element ={<DashBoardPage/>} />
            <Route path="/send" element={<SendMoney/>} />
            <Route path="/" element= {<Home/>} />

          </Routes>

        </Router>
    </div>
  )
}

export default App
