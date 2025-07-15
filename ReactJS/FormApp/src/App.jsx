import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(e) {
    e.preventDefault();
    setSubmittedData(formData); // Save the data to display
  }

  return (
    <div>
        {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <p>
            <strong>First Name:</strong> {submittedData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {submittedData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Country:</strong> {submittedData.country}
          </p>
          <p>
            <strong>Receive:</strong> {submittedData.comments && "Comments "}
            {submittedData.candidates && "Candidates "}
            {submittedData.offers && "Offers "}
          </p>
          <p>
            <strong>Push Notification:</strong> {submittedData.pushNotification}
          </p>
        </div>
      )}
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">Firstname : </label>
        <input
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          type="text"
          placeholder="Abhi"
        />
        <br />
        <br />
        <label htmlFor="lastName">Lastname : </label>
        <input
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          type="text"
          placeholder="Mistry"
        />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          type="email"
          placeholder="abc@gmail.com"
        />
        <br />
        <br />
        <label htmlFor="country">Country : </label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>

          <input
            type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <label htmlFor="comments">Comments</label>
          <br />

          <input
            type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <label htmlFor="candidates">Candidates</label>
          <br />

          <input
            type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <label htmlFor="offers">Offers</label>
        </fieldset>
        <br />
        <br />
        <fieldset>
          <legend>Push Notification</legend>

          <input
            type="radio"
            name="pushNotification"
            id="everything"
            value="everything"
            checked={formData.pushNotification === "everything"}
            onChange={changeHandler}
          />
          <label htmlFor="everything">Everything</label>
          <br />

          <input
            type="radio"
            name="pushNotification"
            id="sentEmail"
            value="sent email"
            checked={formData.pushNotification === "sent email"}
            onChange={changeHandler}
          />
          <label htmlFor="sentEmail">Sent Email</label>
          <br />

          <input
            type="radio"
            name="pushNotification"
            id="nothing"
            value="nothing"
            checked={formData.pushNotification === "nothing"}
            onChange={changeHandler}
          />
          <label htmlFor="nothing">Nothing</label>
        </fieldset>
        <button>Submit</button>
      </form>
    
    </div>
  );
}

export default App;
