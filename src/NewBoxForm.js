import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    color: ""
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox({ ...formData, id: uuid() });
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height: </label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="color">Color: </label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;
