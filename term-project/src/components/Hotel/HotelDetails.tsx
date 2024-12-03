import React, { useState, useEffect } from "react";
import {
  TabContainer,
  Tab,
  TabContent,
  HotelDetailContainer,
  HotelTitle,
  HotelInfo,
  HotelDetails,
} from "./HotelDetailStyles";
import { useParams, useNavigate } from "react-router-dom";
import SendReviewRequest from "../SendReviewRequest/SendReviewRequest";
import AddBooking from "../CreateBooking/AddBooking";
import Reviews from "../reviews/Reviews";

const HotelDetail: React.FC = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>("sendReviewRequest");

  const hotelData = {
    hotelId: "H1",
    hotelName: "Grand Hotel",
    address: "123 Grand Avenue, City",
    email: "contact@grandhotel.com",
    phoneNumber: "123-456-7890",
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (!hotelId) {
      navigate("/");
    }
  }, [hotelId, navigate]);

  return (
    <HotelDetailContainer>
      <HotelTitle>{hotelData?.hotelName}</HotelTitle>
      <HotelInfo>
        <HotelDetails>
          <strong>Address:</strong> {hotelData?.address}
        </HotelDetails>
        <HotelDetails>
          <strong>Email:</strong> {hotelData?.email}
        </HotelDetails>
        <HotelDetails>
          <strong>Phone:</strong> {hotelData?.phoneNumber}
        </HotelDetails>
      </HotelInfo>

      <TabContainer>
        <Tab
          active={activeTab === "sendReviewRequest"}
          onClick={() => handleTabChange("sendReviewRequest")}
        >
          Send Review Request
        </Tab>
        <Tab
          active={activeTab === "fetchReviews"}
          onClick={() => handleTabChange("fetchReviews")}
        >
          Fetch Reviews
        </Tab>
        <Tab
          active={activeTab === "addBooking"}
          onClick={() => handleTabChange("addBooking")}
        >
          Add Booking
        </Tab>
      </TabContainer>

      <TabContent>
        {activeTab === "sendReviewRequest" && (
          <div>
            <h3>Send Review Request</h3>
            <SendReviewRequest />
          </div>
        )}
        {activeTab === "fetchReviews" && (
          <div>
            <h3>Fetch Reviews</h3>
            <Reviews />
          </div>
        )}
        {activeTab === "addBooking" && (
          <div>
            <h3>Add Booking</h3>
            <AddBooking />
          </div>
        )}
      </TabContent>
    </HotelDetailContainer>
  );
};

export default HotelDetail;
