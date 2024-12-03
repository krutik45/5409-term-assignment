import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddHotelContainer, FormWrapper, InputGroup, Button, Title } from "./AddHotelStyles";

const AddHotel: React.FC = () => {
  const navigate = useNavigate();

  const [hotelData, setHotelData] = useState({
    hotelName: "",
    address: "",
    email: "",
    phoneNo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHotelData({
      ...hotelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      // Simulate API request to save the hotel data
      const response = await fetch("https://example.com/add-hotel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotelData),
      });

      const data = await response.json();
      console.log("Hotel added successfully:", data);
      if (data.statusCode === 200) {
        // Navigate to a page after successfully adding the hotel
        navigate("/hotels");
      } else {
        setError(data.message || "Failed to add hotel");
      }
    } catch (err) {
      setError("Error occurred while adding the hotel");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AddHotelContainer>
      <FormWrapper>
        <Title>Add a New Hotel</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="hotelName">Hotel Name</label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              value={hotelData.hotelName}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={hotelData.address}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={hotelData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              value={hotelData.phoneNo}
              onChange={handleChange}
              required
            />
          </InputGroup>

          {error && <div className="error-message">{error}</div>}

          <Button type="submit" disabled={loading}>
            {loading ? "Adding Hotel..." : "Add Hotel"}
          </Button>
        </form>
      </FormWrapper>
    </AddHotelContainer>
  );
};

export default AddHotel;
