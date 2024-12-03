import React from "react";
import { HotelContainer, HotelCard, HotelInfo, HotelTitle, HotelDetails } from "./HotelsStyles";

const Hotels: React.FC = () => {
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

  return (
    <HotelContainer>
      <h2>Your Hotels</h2>
      <div className="grid">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <HotelCard key={hotel.hotelId}>
              <HotelTitle>{hotel.hotelName}</HotelTitle>
              <HotelInfo>
                <HotelDetails><strong>Address:</strong> {hotel.address}</HotelDetails>
                <HotelDetails><strong>Email:</strong> {hotel.email}</HotelDetails>
                <HotelDetails><strong>Phone:</strong> {hotel.phoneNumber}</HotelDetails>
              </HotelInfo>
            </HotelCard>
          ))
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </HotelContainer>
  );
};

export default Hotels;
