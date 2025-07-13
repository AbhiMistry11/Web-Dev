import "./ProductForm.css";
import React, { useState } from "react";

function ProductForm(props) {
  const [newName, setName] = useState("");
  const [newDate, setDate] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const productData = {
      name: newName,
      date: newDate
    };
    props.onSaveProdut(productData);
    setName("");
    setDate("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-product_title">
          <label htmlFor="">Name</label>
          <input
          value={newName}
            onChange={nameChangeHandler}
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div className="new-date">
          <label htmlFor="">Date</label>
          <input
            value={newDate}
            onChange={dateChangeHandler}
            min="2025-01-01"
            max="2025-12-12"
            type="date"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
