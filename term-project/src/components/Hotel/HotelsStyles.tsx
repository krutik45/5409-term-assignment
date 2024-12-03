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
