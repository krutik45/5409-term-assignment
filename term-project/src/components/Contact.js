import React, { useState } from "react";
import axios from "axios"; // Import Axios library for making HTTP requests

const Contact = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { REACT_APP_API_ENDPOINT } = process.env;
    console.log("REACT_APP_API_ENDPOINT", REACT_APP_API_ENDPOINT);
    try {
      // First API call with full payload
      const response1 = await axios.post(
        `${REACT_APP_API_ENDPOINT}/contactus`,
        JSON.stringify(formData)
      );
      console.log(response1.data);
      setFormData({
        FullName: "",
        email: "",
        message: "",
      });
      alert("Message sent successfully!");

      // Second API call with payload containing only the email
      const emailPayload = {
        email: formData.email,
      };
      const response2 = await axios.post(
        `${REACT_APP_API_ENDPOINT}/email`,
        JSON.stringify(emailPayload)
      );
      console.log(response2.data);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <style>
        {`
                    .btn.btn-outline-primary:hover {
                        background-color: #365486 !important;
                        color: white !important;
                        border-radius: 20px;
                    }
                `}
      </style>
      <div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 text-center py-4 my-4">
              <h1>Thank you for Contacting US!</h1>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-5 d-flex justify-content-center">
              <img
                src="/assets/images/contactUs.jpg"
                alt="Contact Us"
                height="300px"
                width="300px"
              />
            </div> */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="FullName"
                    value={formData.FullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100"
                  style={{
                    transition: "background-color 0.3s, color 0.3s",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
