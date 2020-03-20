import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions";
import { deleteData, putData } from "../actions";

const SmurfCard = () => {
  const [editState, setEditState] = useState({
    name: "",
    age: "",
    height: ""
  });

  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleChange = e => {
    setEditState({ [e.target.name]: e.target.value });
  };

  console.log("This is state from inside SmurfCard", state);
  console.log("*******", state.smurfs[0]);

  const smurfArray = state.smurfs[0];
  console.log("&&&&", smurfArray);

  return (
    <div>
      {state.smurfs.map(elem =>
        elem.map((elem, i) => (
          <div key={i}>
            <h1>Name: {elem.name}</h1>
            <h2>Age: {elem.age}</h2>
            <h2>Height: {elem.height}</h2>
            <label>Name:</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              value={editState.name}
            />
            <label>Age:</label>
            <input
              onChange={handleChange}
              type="text"
              name="age"
              id="age"
              value={editState.age}
            />
            <label>Height:</label>
            <input
              onChange={handleChange}
              type="text"
              name="height"
              id="height"
              value={editState.height}
            />
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(putData(elem.id, editState));
              }}
            >
              Edit
            </button>
            <button onClick={() => dispatch(deleteData(elem.id))}>
              Detete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SmurfCard;
