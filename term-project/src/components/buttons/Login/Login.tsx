import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, FormSection } from "./LoginStyles";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

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
