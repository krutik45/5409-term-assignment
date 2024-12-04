import React, { useState, useEffect } from "react";
import axios from "axios";

const Modal = ({ showModal, handleClose, children }) => {
  if (!showModal) return null;

  return (
    <div style={styles.modalBackdrop}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
      setLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { REACT_APP_API_ENDPOINT } = process.env;
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

      setShowRegisterModal(false);
    } catch (error) {
      setShowRegisterModal(false);
      alert("Something went wrong, please try again!");

      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }

    try {
      if (subscribe) {
        const payload2 = { email: email };
        await axios.post(
          `${REACT_APP_API_ENDPOINT}/emailregister`,
          JSON.stringify(payload2)
        );
        console.log("Registration Email has been sent.");
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
        `${REACT_APP_API_ENDPOINT}/login`,
        JSON.stringify(payload)
      );
      console.log("Login successful:", response.data);
      localStorage.setItem("userName", email);
      setUserName(email);
      setLoggedIn(true);

      setShowLoginModal(false);
    } catch (error) {
      alert("Something went wrong, please try again!");
      setShowLoginModal(false);
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
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
            onClick={() => setShowRegisterModal(true)}
          >
            <span className="me-1"></span> Register
          </button>
          <button
            type="button"
            className="custom-btn btn"
            onClick={() => setShowLoginModal(true)}
          >
            <span className="me-1"></span> Login
          </button>
        </>
      )}

      <Modal
        showModal={showRegisterModal}
        handleClose={() => setShowRegisterModal(false)}
      >
        <h5>Register</h5>
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
            <label className="form-check-label" htmlFor="subscribeCheckbox">
              Subscribe to marketing news
            </label>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Register
          </button>
        </form>
      </Modal>

      <Modal
        showModal={showLoginModal}
        handleClose={() => setShowLoginModal(false)}
      >
        <h5>Login</h5>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
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
          <button type="submit" className="btn btn-outline-primary">
            Login
          </button>
        </form>
      </Modal>
    </>
  );
};

const styles = {
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    minWidth: "300px",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;
