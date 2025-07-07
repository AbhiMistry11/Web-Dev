import { useState } from "react";

export default function Form() {
  //   let [fullName, setFullName] = useState("");
  //   let [userName, setUsername] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });

  //   let handleFullName = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let handleUsername = (event) => {
  //     setFullName(event.target.value);
  //   };

  let handleFormData = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  let onSubmitBtn = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
    });
  };

  return (
    <form onSubmit={onSubmitBtn} action="">
      <label htmlFor="fullName">Your Name: </label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter Name"
        value={formData.fullName}
        name="fullName"
        onChange={handleFormData}
      />
      <br />
      <label htmlFor="username">Username : </label>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        value={formData.userName}
        name="userName"
        onChange={handleFormData}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
