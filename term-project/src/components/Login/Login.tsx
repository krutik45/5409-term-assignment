import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, FormSection } from "./LoginStyles";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    const loginData = {
      email,
      password,
    };

    try {
      const response: any = await fetch(
        "https://as8t6c8kwl.execute-api.us-east-1.amazonaws.com/prod/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();
      console.log("response", response, "data", data);

      if (data.statusCode === 200) {
        localStorage.setItem("userEmail", email);

        // Redirect to products page after successful login
        navigate("/hotels");
      } else {
        setError(data.message || "An error occurred during login.");
      }
    } catch (error) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <LoginContainer>
      <FormSection>
        <p className="welcome-message">
          Please <strong>login or sign up</strong> to shop with us.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <button type="submit" className="cta-btn">
              Login
            </button>
          </div>
        </form>

        <div className="sign-up-link">
          <p>
            Don't have an account?{" "}
            <button className="link-btn" onClick={() => navigate("/signup")}>
              Sign up here
            </button>
          </p>
        </div>
      </FormSection>
    </LoginContainer>
  );
};

export default Login;
