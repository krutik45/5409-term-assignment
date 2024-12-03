import React, { useState } from "react";
import { AddBookingContainer, FormWrapper } from "./AddBookingStyles";

const AddBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.customerName ||
      !formData.email ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("YOUR_API_ENDPOINT_FOR_ADDING_BOOKING", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 200) {
        setSuccess("Booking added successfully!");
      } else {
        setError(data.message || "Failed to add booking.");
      }
    } catch (err) {
      setError("Error occurred while adding booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AddBookingContainer>
      <h2>Add a New Booking</h2>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkIn">Check-in Date</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkOut">Check-out Date</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <button type="submit" className="cta-btn" disabled={loading}>
            {loading ? "Adding Booking..." : "Add Booking"}
          </button>
        </form>
      </FormWrapper>
    </AddBookingContainer>
  );
};

export default AddBooking;
