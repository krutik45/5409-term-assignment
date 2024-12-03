import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 40px auto;
  padding: 20px;
  max-width: 1200px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
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
`;
