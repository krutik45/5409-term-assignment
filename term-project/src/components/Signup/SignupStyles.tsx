import styled from "styled-components";

export const SignUpContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const FormWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  margin: 0 auto; /* Center the form wrapper horizontally */

  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      font-size: 16px;
      color: #333;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 6px;
      margin-top: 5px;
    }
  }

  .cta-btn {
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    padding: 12px 20px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
