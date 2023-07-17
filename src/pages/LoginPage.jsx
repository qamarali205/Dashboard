import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
//import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../data/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (event) => {
    event.preventDefault();

    const enteredEmail = values.email;
    const enteredPassword = values.pass;

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword).then(
      (userCredential) => {
        // Login successful
        const user = userCredential.user;
        localStorage.setItem("username", user.email);
        navigate("/");
        window.location.reload();
      }
    );

    if (
      ((values.email === "Hifzur Rehman" ||
        values.email === "Qamar Ali" ||
        values.email === "Jayshree Pali" ||
        values.email === "Ashwini Talhan") &&
        values.pass === "123456") ||
      (values.email === "admin" && values.pass === "admin")
    ) {
      localStorage.setItem("username", values.email);
      navigate("/");
      window.location.reload();
    } else {
      if (!values.email || !values.pass) {
        return;
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-inner">
        <form className="login-form" onSubmit={handleLogin}>
          <span className="key">
            <IoKeyOutline />
          </span>
          <h1 className="form-heading">Admin Panel</h1>
          <label className="login-label">
            Username:
            <input
              className="login-input"
              type="text"
              placeholder="Enter Your Username"
              value={values.email}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
          </label>
          <label className="login-label">
            Password:
            <input
              className="login-input"
              type="password"
              placeholder="Enter Your Password"
              value={values.pass}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  pass: event.target.value,
                }))
              }
            />
          </label>
          <button className="login-btn" type="submit">
            Login
          </button>
          <div className="signup-link">
            Don't have an account? <Link to="/Signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
