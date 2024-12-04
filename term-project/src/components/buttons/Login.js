import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
      setLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { REACT_APP_API_ENDPOINT } = process.env;
    console.log("REACT_APP_API_ENDPOINT", REACT_APP_API_ENDPOINT);
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `${REACT_APP_API_ENDPOINT}/register`,
        JSON.stringify(payload)
      );
      console.log("Registration successful:", response.data);
      localStorage.setItem("userName", email);
      setUserName(email);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }

    try {
      if (subscribe) {
        try {
          const payload2 = {
            email: email,
          };
          const response = await axios.post(
            `https://3x20qxlue1.execute-api.us-east-1.amazonaws.com/prod/emailregister`,
            JSON.stringify(payload2)
          );
          console.log("Registration Email has been sent:", response.data);
        } catch (error) {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
        }
      } else {
        console.log("Checkbox is not checked. Email has not been sent.");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { REACT_APP_API_ENDPOINT } = process.env;
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `https://t1vjqgqapl.execute-api.us-east-1.amazonaws.com/prod/login`,
        JSON.stringify(payload)
      );
      console.log("Login successful:", response.data);
      localStorage.setItem("userName", email);
      setUserName(email);
      setLoggedIn(true);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
    // Remove username from localStorage
    localStorage.removeItem("userName");
  };

  return (
    <>
      <style>
        {`
        .custom-btn {
          font-size: 16px;
          border-radius: 20px;
          padding: 8px 15px;
          transition: all 0.3s ease;
        }

        .custom-btn:hover {
          background-color: #7FC7D9;
          color: white;
          border-color: #7FC7D9;
        }
        `}
      </style>
      {loggedIn ? (
        <div>
          <p>Welcome, {userName}!</p>
          <button onClick={handleLogout} className="custom-btn btn">
            Logout
          </button>
        </div>
      ) : (
        <>
          <button
            type="button"
            className="custom-btn btn ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#modalforregister"
          >
            <span className="me-1"></span> Register
          </button>
          <button
            type="button"
            className="custom-btn btn"
            data-bs-toggle="modal"
            data-bs-target="#modalforlogin"
          >
            <span className="me-1"></span> Login
          </button>
        </>
      )}
      {/* Register Modal */}
      <div
        className="modal fade"
        id="modalforregister"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Register
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="subscribeCheckbox"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="subscribeCheckbox"
                  >
                    Subscribe to marketing news
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Login Modal */}
      <div
        className="modal fade"
        id="modalforlogin"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="emailInputLogin" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInputLogin"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInputLogin" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInputLogin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
