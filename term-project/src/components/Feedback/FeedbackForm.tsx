import React, { useState } from "react";
import { FeedbackFormContainer, FeedbackFormWrapper, InputField, TextAreaField, SubmitButton, ErrorMessage, StarContainer, Star } from "./FeedbackFormStyles";

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    review: 0,
    comment: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarClick = (rating: number) => {
    setFormData({
      ...formData,
      review: rating,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form fields
    if (!formData.name || !formData.email || !formData.phone || formData.review === 0 || !formData.comment) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.your-feedback-api.com/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Feedback submitted successfully!");
      } else {
        setError("Error submitting feedback. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while submitting feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FeedbackFormContainer>
      <h2>Submit Your Feedback</h2>
      <FeedbackFormWrapper onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <InputField
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <InputField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <InputField
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Review Rating</label>
          <StarContainer>
            {[1, 2, 3, 4, 5].map((rating) => (
              <Star
                key={rating}
                filled={formData.review >= rating}
                onClick={() => handleStarClick(rating)}
              >
                ★
              </Star>
            ))}
          </StarContainer>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Your Comment</label>
          <TextAreaField
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            placeholder="Write your feedback here..."
          />
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </SubmitButton>
      </FeedbackFormWrapper>
    </FeedbackFormContainer>
  );
};

export default FeedbackForm;
