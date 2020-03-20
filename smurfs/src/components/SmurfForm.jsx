import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../actions";

const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: null,
    height: ""
  });

  console.log("this is SMURF before onChange", smurf);

  const dispatch = useDispatch();

  const handleChanges = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  console.log("SMURF after onChange", smurf);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("SMURF from inside handleSubmit", smurf);
    dispatch(postData(smurf));
    setSmurf({
      name: "",
      age: undefined,
      height: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            onChange={handleChanges}
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={smurf.name}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            onChange={handleChanges}
            id="age"
            name="age"
            type="number"
            placeholder="Age"
            value={smurf.age}
          />
        </label>
        <label htmlFor="height">
          Height:
          <input
            onChange={handleChanges}
            id="height"
            name="height"
            type="text"
            placeholder="Height"
            value={smurf.height}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SmurfForm;
