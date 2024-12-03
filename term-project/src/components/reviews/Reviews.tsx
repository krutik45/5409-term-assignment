import React from "react";
import { TableContainer, StyledTable } from "./ReviewsStyles";

interface Review {
  customerName: string;
  email: string;
  phoneNo: string;
  review: number;
  comment: string;
}

const reviews: Review[] = [
  {
    customerName: "John Doe",
    email: "john.doe@example.com",
    phoneNo: "123-456-7890",
    review: 4.5,
    comment: "Great service and amazing experience!",
  },
  {
    customerName: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNo: "987-654-3210",
    review: 5.0,
    comment: "Loved the stay! Highly recommended.",
  },
  {
    customerName: "Tom Johnson",
    email: "tom.johnson@example.com",
    phoneNo: "555-666-7777",
    review: 3.5,
    comment: "Good service but could improve cleanliness.",
  },
];

const Reviews: React.FC = () => {
  return (
    <TableContainer>
      <h2>Customer Reviews</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Review</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td>{review.customerName}</td>
              <td>{review.email}</td>
              <td>{review.phoneNo}</td>
              <td>{review.review.toFixed(1)} / 5</td>
              <td>{review.comment}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Reviews;
