import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "./config";
// import AuthService from "../services/auth.service";
import "./Login.css";
// import { Nav } from "../Nav";
// import { Footer } from "../Footer";

export const Login = () => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");

  const[errorMsg,setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${API_URL}/auth/authenticate`, {
          email: email,
          password: password,
        })
        .then((Response) => {
          console.log("Logged In",Response);
          if (Response.data.access_token) {
            localStorage.setItem("user", JSON.stringify(Response.data));
          }
          navigate("/")
          return Response.data;
        });
    } catch (err) {
      alert(err);
    }
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await AuthService.login(email, password).then(
//         (response) => {
//           console.log("Logged In", response);
//           navigate("/home");
//           //window.location.reload();
//         },
//         (error) => {
//           console.log(error);
//           setErrorMsg("Incorrect Email or Password");
//         }
//       );
//     } catch (err) {
      
//       alert(err);
//     }
//   };
  return (
    <div className="login-full relative rounded-lg border animate-fadein">
      {/* <Nav /> */}

      <div className="">
        <div className="text-4xl font-bold p-4">
            Calm Quest Admin

        </div>
        <div className="auth-form-cantainer">
          <div className="auth-logo">
            <img src="src\assets\logo.png"></img>
          </div>
          <div className="login-form-cantainer">
            <h2>
              <b>Login</b>
            </h2>
            <h3>Enter your credentials</h3>
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                value={email}
                onChange={(input) => setName(input.target.value)}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required="required"
              />
              <input
                value={password}
                onChange={(input) => setPassword(input.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required="required"
              />
              <p className="text-red-500 " >{errorMsg}</p>
              <button type="submit">
                <b>LOGIN</b>
              </button>
            </form>
            
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
