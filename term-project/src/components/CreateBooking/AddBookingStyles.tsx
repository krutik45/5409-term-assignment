import styled from "styled-components";

export const AddBookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f4f6f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    font-weight: 600;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  .form-group {
    margin-bottom: 15px;
    label {
      font-size: 16px;
      font-weight: 500;
      color: #555;
      margin-bottom: 5px;
      display: block;
    }
    input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      color: #333;
      background-color: #fff;
      margin-top: 5px;
      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }
  }

  .cta-btn {
    padding: 12px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
    &:disabled {
      background-color: #d6d6d6;
      cursor: not-allowed;
    }
  }

  .error-message {
    color: #ff4d4d;
    font-size: 14px;
    margin-top: 10px;
  }

  .success-message {
    color: #4CAF50;
    font-size: 14px;
    margin-top: 10px;
  }
`;
