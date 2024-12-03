import React, { useState } from "react";
import {
  SendReviewContainer,
  StyledTable,
  ActionButton,
  Title,
} from "./SendReviewRequestStyles";

interface Customer {
  name: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
}

const customers: Customer[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    checkInDate: "2024-11-20",
    checkOutDate: "2024-11-22",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    checkInDate: "2024-11-18",
    checkOutDate: "2024-11-20",
  },
  {
    name: "Tom Johnson",
    email: "tom.johnson@example.com",
    checkInDate: "2024-11-15",
    checkOutDate: "2024-11-17",
  },
  {
    name: "Alice Brown",
    email: "alice.brown@example.com",
    checkInDate: "2024-11-10",
    checkOutDate: "2024-11-12",
  },
];

const SendReviewRequest: React.FC = () => {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  const handleCheckboxChange = (email: string) => {
    setSelectedCustomers((prevSelected) => {
      if (prevSelected.includes(email)) {
        return prevSelected.filter((selectedEmail) => selectedEmail !== email);
      } else {
        return [...prevSelected, email];
      }
    });
  };

  const handleSendEmail = async () => {
    if (selectedCustomers.length === 0) {
      alert("Please select customers to send review requests.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.your-email-service.com/send-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emails: selectedCustomers }),
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Review requests sent successfully!");
      } else {
        alert("Error sending review requests.");
      }
    } catch (error) {
      alert("An error occurred while sending review requests.");
    }
  };

  return (
    <SendReviewContainer>
      <Title>Send Review Requests</Title>
      <StyledTable>
        <thead>
          <tr>
            <th>Select</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.email}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCustomers.includes(customer.email)}
                  onChange={() => handleCheckboxChange(customer.email)}
                />
              </td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.checkInDate}</td>
              <td>{customer.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <ActionButton
        onClick={handleSendEmail}
        disabled={selectedCustomers.length === 0}
      >
        Send Review Request
      </ActionButton>
    </SendReviewContainer>
  );
};

export default SendReviewRequest;
