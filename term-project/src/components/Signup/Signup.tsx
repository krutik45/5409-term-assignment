import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpContainer,
  FormWrapper,
  InputGroup,
  Button,
  Title,
} from "./SignupStyles";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://4m7c1sv3p9.execute-api.us-east-1.amazonaws.com/prod/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ownerName: formData.ownerName,
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();
        console.log("data signup", data);
        if (data.statusCode === 200) {
          console.log("Sign-Up successful:", data);
          navigate("/add-hotel"); // Navigate to the hotel addition page after successful sign-up
        } else {
          setError(data.message || "Failed to sign up");
        }
      } catch (err) {
        setError("Error occurred while signing up");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SignUpContainer>
      <FormWrapper>
        <Title>Create Your Account</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </InputGroup>

          {error && <div className="error-message">{error}</div>}

          <Button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
      </FormWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
