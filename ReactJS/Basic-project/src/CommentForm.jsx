import { useState } from "react";

export default function CommentForm({ setSubmittedData }) {
  const [formData, setFormData] = useState({
    fullName: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({
      fullName: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="fullName">Your Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        placeholder="Enter Name"
      />
      <br />

      <label htmlFor="remarks">Remarks:</label>
      <textarea
        id="remarks"
        name="remarks"
        value={formData.remarks}
        onChange={handleInputChange}
        placeholder="Enter your remarks"
      ></textarea>
      <br />

      <label htmlFor="rating">Rating (1-5):</label>
      <input
        type="number"
        id="rating"
        name="rating"
        min={1}
        max={5}
        value={formData.rating}
        onChange={handleInputChange}
        placeholder="Rating"
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
