import styled from "styled-components";

export const SendReviewContainer = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  color: #333;

  thead {
    background-color: #007bff;
    color: #fff;
  }

  th,
  td {
    text-align: left;
    padding: 12px 15px;
    border: 1px solid #ddd;
  }

  tbody tr:nth-child(odd) {
    background-color: #f7f7f7;
  }

  tbody tr:hover {
    background-color: #e9ecef;
  }

  th {
    font-weight: bold;
    text-transform: uppercase;
  }

  input[type="checkbox"] {
    margin: 0;
  }
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 20px auto;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;
