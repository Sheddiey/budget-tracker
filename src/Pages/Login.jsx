import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <main>
        <section>
          <div>
            <h1>Budget Tracker</h1>
            <form action="">
              <div>
                <label htmlFor="email-address">Email Address</label>
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  required
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>
            <p>
              No account yet?
              <NavLink to="/">Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
