import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
        setError(error);
      });
  };
  return (
    <>
      <main>
        <section>
          <div className="login-page">
            <h1>
              Budget <span>Tracker</span>
            </h1>
            <form action="">
              <div className="email-input">
                <label htmlFor="email-address">Email Address</label>
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  required
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderColor: error ? "red" : "" }}
                />
              </div>
              <div className="password-input">
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
                <button className="btn-login" onClick={onLogin}>
                  Login
                </button>
              </div>
            </form>
            <p>
              No account yet?
              <span>
                <NavLink to="/signup">Sign up</NavLink>
              </span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
