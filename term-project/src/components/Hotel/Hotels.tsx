import React from "react";
import {
  HotelContainer,
  HotelCard,
  HotelInfo,
  HotelTitle,
  HotelDetails,
  CtaButton, // assuming you have a button styled component
} from "./HotelsStyles";
import { useNavigate } from "react-router-dom";

const Hotels: React.FC = () => {
  const navigate = useNavigate();

  // Hardcoded hotel data
  const hotels = [
    {
      hotelId: "H1",
      hotelName: "Grand Hotel",
      address: "123 Grand Avenue, City",
      email: "contact@grandhotel.com",
      phoneNumber: "123-456-7890",
    },
    {
      hotelId: "H2",
      hotelName: "Ocean View Resort",
      address: "456 Ocean Drive, Beach City",
      email: "info@oceanviewresort.com",
      phoneNumber: "987-654-3210",
    },
    {
      hotelId: "H3",
      hotelName: "Mountain Peak Lodge",
      address: "789 Mountain Road, Hilltop",
      email: "contact@mountainpeaklodge.com",
      phoneNumber: "321-654-9870",
    },
  ];

  // Handle hotel click to redirect to the hotel detail page
  const handleHotelClick = (hotelId: string) => {
    navigate(`/hotel/${hotelId}`);
  };

  // Handle Add Hotel click to navigate to the "Add Hotel" page
  const handleAddHotelClick = () => {
    navigate("/addHotel"); // Make sure the path is correct for the Add Hotel page
  };

  return (
    <HotelContainer>
      <h2>Your Hotels</h2>
      <div className="grid">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <HotelCard
              key={hotel.hotelId}
              onClick={() => handleHotelClick(hotel.hotelId)}
            >
              <HotelTitle>{hotel.hotelName}</HotelTitle>
              <HotelInfo>
                <HotelDetails>
                  <strong>Address:</strong> {hotel.address}
                </HotelDetails>
                <HotelDetails>
                  <strong>Email:</strong> {hotel.email}
                </HotelDetails>
                <HotelDetails>
                  <strong>Phone:</strong> {hotel.phoneNumber}
                </HotelDetails>
              </HotelInfo>
            </HotelCard>
          ))
        ) : (
          <div>
            <p>No hotels found.</p>
            <CtaButton onClick={handleAddHotelClick}>Add Hotel</CtaButton>
          </div>
        )}
      </div>
    </HotelContainer>
  );
};

export default Hotels;
