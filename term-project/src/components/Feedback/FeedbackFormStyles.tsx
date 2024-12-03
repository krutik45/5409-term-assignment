import styled from "styled-components";

export const FeedbackFormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

export const FeedbackFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputField = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  transition: border-color 0.3s ease;
  margin-bottom: 15px; /* Adds space below the input fields */

  &:focus {
    border-color: #4caf50;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const TextAreaField = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease;
  margin-bottom: 15px; /* Adds space below the text area */

  &:focus {
    border-color: #4caf50;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px; /* Adds space above the submit button */

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #b5e0a0;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px; /* Adds space below error message */
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 8px;
  font-size: 30px;
  margin-bottom: 15px; /* Adds space below the star container */
`;

interface StarProps {
  filled: boolean;
}

export const Star = styled.span<StarProps>`
  cursor: pointer;
  color: ${({ filled }) => (filled ? "#FFD700" : "#ddd")};
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

// Add styling for labels to ensure space between label and input
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px; /* Adds space between label and input */
`;
