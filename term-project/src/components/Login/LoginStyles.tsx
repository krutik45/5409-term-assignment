import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 0; /* Remove unnecessary margin */
  background-color: #f9f9f9; /* Light background */
`;

export const FormSection = styled.section`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 400px;
  text-align: center;

  .welcome-message {
    font-size: 20px;
    margin-bottom: 20px;
    color: #333;
    font-weight: 500;
  }

  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }

  label {
    font-size: 14px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-top: 8px;
    margin-bottom: 15px;
  }

  .cta-btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  .sign-up-link {
    margin-top: 15px;
    font-size: 14px;
    color: #555;
  }

  .link-btn {
    color: #007bff;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
