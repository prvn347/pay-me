import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../component/BottomWarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { SubHeading } from "../component/SubHeading";
import axios from "axios";
import { UnAuthAppBar } from "../component/UnAuthAppBar";

export const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Assuming you want to redirect to the dashboard if the user is already authenticated
      navigate("/dashboard");
    }
  }, [navigate]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
        <UnAuthAppBar/>
    <div className="bg-custom-blue h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 px-4 h-max">
          <Heading label={"Sign up"} />
          <SubHeading
            label={"Enter your information to create an account"}
          />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"Pravin"}
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder={"Sahu"}
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder={"prvn347@gmail.com"}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"123241321"}
            label={"Password"}
          />
          <div className="pt-2">
            <Button
              label={"Sign up"}
              onClick={async () => {
                const response = await axios.post(
                  "https://payme-n7nv.onrender.com/api/v1/user/signup",
                  {
                    username,
                    password,
                    firstName,
                    lastName,
                  }
                );
                localStorage.setItem("token", response.data.token);
                // Redirect to dashboard with the first name as query parameter
                navigate("/dashboard");
              }}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Signin"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
    </div>
  );
};
