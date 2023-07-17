import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setIsLoggedIn(true);
      navigate("/");
    }
  }, []);

const handleGoogleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
      console.log("Google Sign-In Successful:", result);
      navigate("/");
      window.location.reload();
    })
    .catch((error) => {
      // Handle sign-in error
      console.error("Google Sign-In Error:", error);
      setErrorMsg(error.message);
    });
};


  const handleLogin = (event) => {
    event.preventDefault();
    if (
      ((values.email === "Hifzur Rehman" ||
        values.email === "Qamar Ali" ||
        values.email === "Jayshree Pali" ||
        values.email === "Ashwini Talhan") &&
        values.pass === "123456") ||
      (values.email === "admin" && values.pass === "admin")
    ) {
      localStorage.setItem("username", values.email);
      setIsLoggedIn(true);
      navigate("/");
      window.location.reload();
    } else {
      if (!values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");

      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
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
           <button className="login-btn" onClick={handleGoogleSignIn}>
      Sign in with Google
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
