import styled from "styled-components";

export const HotelContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

export const HotelCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const HotelTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
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

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Tab = styled.div<{ active: boolean }>`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 1rem;
  border-bottom: ${({ active }) => (active ? "2px solid #007bff" : "none")};
  color: ${({ active }) => (active ? "#007bff" : "#555")};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

export const TabContent = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #ddd;
  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
  .cta-btn {
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
