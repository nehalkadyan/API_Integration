import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // navigate
  const navigate = useNavigate();

  // state variables
  const [username, setUsername] = useState("");

  console.log("username", username);

  const [email, setEmail] = useState("");
  console.log("email", email);

  const [password, setPassword] = useState("");

  console.log("password", password);

  // function to signup user

  const signupUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        // req.body
        { username, email, password }
      );

      // on successful signup
      if (response.data) {
        navigate("/signin");
      }

      console.log(response.data);
    } catch (err) {
      console.log("error while registering the user", err);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      {/* registration form */}

      <form onSubmit={signupUser} className="signup_form">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit"> Signup </button>
      </form>
    </div>
  );
};

export default Signup;
