import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <main>
      <section>
        <div>
          <div className="login-page">
            <h1>Budget Tracker</h1>
            <form action="">
              <div className="email-input">
                <label htmlFor="email-address">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className="password-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button className="btn-login" type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>
            <p>
              Already have an account?
              <span>
                <NavLink to="/login">Sign in</NavLink>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
