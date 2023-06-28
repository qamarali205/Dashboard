import React, { useState, useEffect } from "react";
import './LoginPage.css';
import { IoKeyOutline } from "react-icons/io5";
import {useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    if ((((username === "Hifzur Rehman")||(username === "Qamar Ali")||(username === "Jayshree Pali")||(username === "Ashwini Talhan"))&& password === "123456")||(username==="admin"&&password==="admin")) {
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      navigate("/");
      
      window.location.reload(); 
    }
    else{
        alert('Invalid username or password');
    }
  };

 

    return (
        <div className="login-page">
            <div className="login-inner">
      <form className="login-form" onSubmit={handleLogin}>
        <span className="key">
      <IoKeyOutline  />
      </span>
        <h1 className="form-heading">Admin Panel</h1>
        <label className="login-label">
          Username:
          <input
            className="login-input"
            type="text"
            placeholder="Enter Your Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        <p className="hints">To access username: <span>admin</span></p>
        </label>
        <label className="login-label">
          Password:
          <input
            className="login-input"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p className="hints">To access password: <span>admin</span></p>
        </label>
        <button className="login-btn" type="submit">Login</button>
      </form>
      </div>
      </div>
    );
  }


export default LoginPage;
