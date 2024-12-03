import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#ddd")};
  }
`;

export const TabContent = styled.div`
  margin-top: 2rem;
`;

export const HotelDetailContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HotelTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const HotelInfo = styled.div`
  font-size: 1.1rem;
  color: #555;
`;

export const HotelDetails = styled.p`
  margin: 0.5rem 0;
  strong {
    color: #333;
  }
`;

export const CtaButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;
